// our app controllers
weatherApp.controller(
  "homeCtrl",
  [
    "$scope",
    "cityName",
    function ($scope, cityName) {
      $scope.city = cityName.city;

      $scope.$watch("city", function () {
        cityName.city = $scope.city;
      });
    }, // end controller fn()
  ] // end of model
); // end of controller

weatherApp.controller(
  "forecastCtrl",
  [
    "$scope",
    "cityName",
    "$resource",
    "$routeParams",
    function ($scope, cityName, $resource, $routeParams) {
      //
      // cityName custom service is a singleton, get the data from the user through $watch from the user and saved in this scope, so it can passed to a totally another controller if it's $watch-ing for it
      $scope.city = cityName.city;

      // we save the $routeParams in the $scope, to use it in other places
      $scope.stamps = $routeParams.stamps;

      // we save the basic request in $scope.weatherApi
      $scope.weatherApi = $resource(
        "http://api.openweathermap.org/data/2.5/forecast",

        // defining the method type here, and allowing it to be called in the returned object
        {
          get: {
            method: "GET",
            params: {},
          },
        }
      );

      // we call our request from $scope.weatherApi
      $scope.weatherResult = $scope.weatherApi
        .get({
          q: $scope.city,
          cnt: $scope.stamps || "2",
          appid: "fc1d46d66a13c1db8b0ed54e91a375d3",
          units: "metric",
        }) //end get()

        //the get() method return a promise, so we have to handle it Async.
        .$promise.then((response) => {
          $scope.dayList = response.list;
          // console.log("day list is ", $scope.dayList);
        }); // end $promis.then()

      $scope.$watch("dayList", function () {
        // console.log($scope.dayList, "here");
      });

      // we need a $scope method for converting dates, this is the way to convert something from the view, by calling $scope methods
      $scope.convertDate = (dt) => {
        return new Date(dt * 1000);
      };
    }, // end controller fn()
  ] // end of model
); // end of controller

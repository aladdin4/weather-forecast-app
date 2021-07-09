// we need service to transfer data from controller($scope) to another controller($scope)
weatherApp.service("cityName", function () {
  this.city = "Alexandria";
});

// a custom service for the API requests
weatherApp.service("weatherAPiService", [
  "$resource",
  function ($resource) {
    // defining a function that belongs to the service so it can be called from any injected controller
    this.GetWeather = function (city, stamps) {
      // we save the basic request in weatherApi variable
      let weatherApi = $resource(
        "http://api.openweathermap.org/data/2.5/forecast",

        // defining the method type here, and allowing it to be called in the returned object
        {
          get: {
            method: "GET",
            params: {},
          },
        }
      );

      // we call our request from weatherApi
      let weatherResult = weatherApi.get({
        q: city,
        cnt: stamps || "2",
        appid: "fc1d46d66a13c1db8b0ed54e91a375d3",
        units: "metric",
      }); //end get()

      // we return the promise to the controller so it can utilize it into the $scope
      // this way, each controller will be able to make the call and save it in it's own $scope
      return weatherResult;
    };
  },
]);

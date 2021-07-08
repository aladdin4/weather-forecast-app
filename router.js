// our app router
weatherApp.config(
  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      // we feed the pages to the router here
      .when("/", {
        templateUrl: "pages/home.html",
        controller: "homeCtrl",
      }) //end when

      .when("/forecast", {
        templateUrl: "pages/forecast.html",
        controller: "forecastCtrl",
      }) //end when

      // making our url control the number of stamps
      .when("/forecast/:stamps", {
        templateUrl: "pages/forecast.html",
        controller: "forecastCtrl",
      });
  } // end anon fn()
); // end config

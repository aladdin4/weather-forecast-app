const weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

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
      }); //end when
  } // end anon fn()
); // end config

// our app controllers
weatherApp.controller(
  "homeCtrl",
  [
    "$scope",
    function ($scope) {
      $scope.msg = "I love homePage";
      console.log($scope.msg);
    }, // end anon. fn()
  ] // end of model
); // end of controller

weatherApp.controller(
  "forecastCtrl",
  [
    "$scope",
    function ($scope) {
      $scope.msg = "I love forecastPage";
      console.log($scope.msg);
    }, // end anon. fn()
  ] // end of model
); // end of controller

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

// we need service to transfer data from controller($scope) to another controller($scope)
weatherApp.service("cityName", function () {
  this.city = "Alexandria";
});

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
    }, // end anon. fn()
  ] // end of model
); // end of controller

weatherApp.controller(
  "forecastCtrl",
  [
    "$scope",
    "cityName",
    function ($scope, cityName) {
      $scope.city = cityName.city;
    }, // end anon. fn()
  ] // end of model
); // end of controller

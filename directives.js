// directives
// a directive for the repeated display of time stamps weather report, directives are useful in the reuse of the same components
weatherApp.directive("forecastDirective", function () {
  return {
    templateUrl: "./directives/forecastDirective.html",
    scope: {
      direvtiveConvertDate: "&",
      directiveDay: "=",
    },
  };
});

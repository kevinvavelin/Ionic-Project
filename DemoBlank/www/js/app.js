// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})
.controller("DemoController", function($scope) {
  $scope.ionicLogo = "img/ionic.png";
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state("index", {
      url: "",
      templateUrl: "views/home.html"
    })

    .state("login", {
      url:"/login",
      templateUrl: "views/login.html"
    })

    .state("details", {
      url:"/detail",
      templateUrl: "views/details.html",
      controller: "DemoController"
    });

    $urlRouterProvider.otherwise("");
});

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);

  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterController'
  })

  .state('project', {
    url: '/project',    
    templateUrl: 'templates/projects.html',
    controller: 'ProjectController'  
  })

  .state('project.metrics', {
    url: '/project/:projectId',    
    templateUrl: 'templates/projectDetails.html',
    controller: 'ProjectDetailsController'    
  })

  .state('project.metrics.details', {
    url: '/project/:projectId/details',    
    templateUrl: 'templates/projectMetrics.html',
    controller: 'ProjectMetricsController'
  })

  .state('client', {
    url: '/clientView',  
    templateUrl: 'templates/clientView.html',
    controller: 'ClientViewController'
  })

  .state('client.view', {
    url: '/clientView/:projectId',
    templateUrl: 'templates/clientView.html',
    controller: 'ClientViewController'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});

 /*.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

 .state('project', {
    url: '/project',
    views: {
      'menuContent': {
        templateUrl: 'templates/project.html'
        controller: 'ProjectController'
      }
    }
  })*/

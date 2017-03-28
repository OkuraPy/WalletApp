// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      $cordovaPlugin.someFunction().then(success, error);
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

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  })

  .state('app.dash', {
    url: '/dash',
    views: {
      'menuContent': {
        templateUrl: 'templates/dash.html'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
    resolve:{
			"check":function($location){  
				if(sessionStorage.getItem('token')){ $location.path('/app/dash');   }
				else									 {  $location.path('/login');   }
			}}
  })

  .state('app.send', {
      url: '/send',
      views: {
        'menuContent': {
          templateUrl: 'templates/send.html'
          
        }
      }
    })
    .state('app.receive', {
      url: '/receive',
      views: {
        'menuContent': {
          templateUrl: 'templates/receive.html',
          controller: 'listdepositsCtrl'
        }
      }
    })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        //controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.security', {
    url: '/security',
    views: {
      'menuContent': {
        templateUrl: 'templates/security.html',
        //controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise(function ($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("login");
  });
});
// import angular from 'angular';
// import 'angular-animate';
// import 'angular-aria';
// import 'angular-material';
// var angularAnimate = require('angular-animate');
// var angularAria = require('angular-aria');
// var angularMaterial = require('angular-material');

var app=angular.module('GameSalesHubIndex', ['ngMaterial', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        views: {
            'toolbar': {
                templateUrl: '/partials/toolbar.html'
            },
            'sidenav': {
                templateUrl: 'partials/sidenav.html'
            },
            'content': {
                templateUrl: '/partials/game-card.html'
            }
        }
    })
    .state('gameDetail', {
        url: '/detail',
        params: {
          game: null
        },
        views: {
            'toolbar@': {
                templateUrl: '/partials/toolbar.html'
            },
            'content@': {
                templateUrl: '/partials/game-detail.html',
                controller: 'GameDetailCtrl'
            }
        }
    });
}]);

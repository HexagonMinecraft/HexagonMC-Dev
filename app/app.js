angular.module('app', [
        'ui.router',
        'ui.materialize',
        'app.controllers',
        'app.services'
    ])
    .config(function ($compileProvider, $stateProvider, $urlRouterProvider, $sceProvider, $httpProvider, $locationProvider) {
        $sceProvider.enabled(false);
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })

        $urlRouterProvider.otherwise('/');
    });
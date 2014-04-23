'use strict';

var siteSale = angular
    .module('siteSale', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .when('/smartphones', {
                templateUrl: 'templates/smartphones.html'
            })
            .when('/tablets', {
                templateUrl: 'templates/tablets.html'
            })
            .when('/wearables', {
                templateUrl: 'templates/wearables.html'
            })
            .otherwise({ redirectTo: '/home' });
    });
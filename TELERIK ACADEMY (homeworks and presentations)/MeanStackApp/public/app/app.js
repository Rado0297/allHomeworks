var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider){
    //$locationProvider.html5Mode(true);

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth){
                return auth.isAuthorizedForRole('admin');
            }
        },
        authenticated: {
            authenticate: function (auth) {
                return auth.isAuthenticated();
            }
        }
    }

    $routeProvider
        .when('/',{
            templateUrl: '/partials/main/home',
            controller: 'MainCtrl'
        })
        //routes gor algebra part
        .when('/algebra',{
            templateUrl: '/partials/algebra/algebra',
            controller: 'PhoneListCtrl'
        })
        //routes for geometry part
        .when('/geometry',{
            templateUrl: '/partials/geometry/geometry',
            controller: ''
        })
        .when('/geometry/randomTr/tr-per',{
            templateUrl: '/partials/geometry/triangular/randomTr/tr-per',
            controller: ''
        })
        .when('/geometry/randomTr/tr-area',{
            templateUrl: '/partials/geometry/triangular/randomTr/tr-area',
            controller: ''
        })
        .when('/geometry/equsideTr/equTr-per',{
            templateUrl: '/partials/geometry/triangular/equsideTr/equTr-per',
            controller: ''
        })

        .when('/geometry/randomQuadril/ranquadrila-per',{
            templateUrl: '/partials/geometry/quadrilaterals/randomQuadrilaterals/ranquadrila-per',
            controller: ''
        })
        //for auth modules
        .when('/phones',{
            templateUrl: '/partials/phones/phones-list',
            controller: 'PhoneListCtrl'
        })
        .when('/phones/:id',{
            templateUrl: '/partials/phones/phone-details',
            controller: 'PhoneDetailsCtrl'
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })
        .when('/about',{
            templateUrl: '/partials/main/about',
            controller: ''
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'UserListCtrl',
            resolve: routeUserChecks.adminRole
        })
});

app.run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection){
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    });
});
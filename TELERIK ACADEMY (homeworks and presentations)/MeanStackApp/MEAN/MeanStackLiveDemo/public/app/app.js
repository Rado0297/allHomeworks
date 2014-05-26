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
//for auth modules
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
//routes gor algebra part
        .when('/algebra',{
            templateUrl: '/partials/algebra/algebra',
            controller: 'PhoneListCtrl'
        })
        .when('/algebra/equations/linearequ/linearequ',{
            templateUrl: '/partials/algebra/equations/linearequ/linearequ',
            controller: ''
        })
        .when('/algebra/equations/quadratic/quadratic',{
            templateUrl: '/partials/algebra/equations/quadratic/quadratic',
            controller: ''
        })
//routes for geometry part
        //for triangular
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
        .when('/geometry/randomTr/tr-side',{
            templateUrl: '/partials/geometry/triangular/randomTr/tr-side',
            controller: ''
        })
        .when('/geometry/randomTr/tr-sideFromArea',{
            templateUrl: '/partials/geometry/triangular/randomTr/tr-sideFromArea',
            controller: ''
        })
        .when('/geometry/randomTr/tr-heightFromArea',{
            templateUrl: '/partials/geometry/triangular/randomTr/tr-heightFromArea',
            controller: ''
        })
        .when('/geometry/equSideTr/tr-per',{
            templateUrl: '/partials/geometry/triangular/equSideTr/tr-per',
            controller: ''
        })
        .when('/geometry/equSideTr/tr-area',{
            templateUrl: '/partials/geometry/triangular/equSideTr/tr-area',
            controller: ''
        })
        .when('/geometry/equSideTr/tr-sideFromPer',{
            templateUrl: '/partials/geometry/triangular/equSideTr/tr-sideFromPer',
            controller: ''
        })
        .when('/geometry/equSideTr/tr-sideFromArea',{
            templateUrl: '/partials/geometry/triangular/equSideTr/tr-sideFromArea',
            controller: ''
        })
        .when('/geometry/equSideTr/tr-height',{
            templateUrl: '/partials/geometry/triangular/equSideTr/tr-height',
            controller: ''
        })
        //for quadrilaterals
        .when('/geometry/randomQuadril/ranquadrila-per',{
            templateUrl: '/partials/geometry/quadrilaterals/randomQuadrilaterals/ranquadrila-per',
            controller: ''
        })
        .when('/geometry/rectangle/rec-per',{
            templateUrl: '/partials/geometry/quadrilaterals/rectangle/rec-per',
            controller: ''
        })
//about pages
        .when('/about/howToGeometry',{
            templateUrl: '/partials/about/howToGeometry',
            controller: ''
        })
        .when('/about/howToAlgebra',{
            templateUrl: '/partials/about/howToAlgebra',
            controller: ''
        })
        .when('/about/faq',{
            templateUrl: '/partials/about/faq',
            controller: ''
        })
        .when('/about/support',{
            templateUrl: '/partials/about/support',
            controller: ''
        })

});

app.run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection){
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    });
});
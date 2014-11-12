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
        .when('/support',{
            templateUrl: '/partials/about/support',
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
        .when('/users/:id',{
            templateUrl: '/partials/admin/user-details',
            controller: 'UserDetailsCtrl',
            resolve: routeUserChecks.adminRole
        })
        .when('/terms',{
            templateUrl: '/partials/account/terms',
            controller: ''
        })
//Users activity
        .when('/allUsers', {
            templateUrl: '/partials/users/allUsers',
            controller: ''
        })
        .when('/chatroom', {
            templateUrl: '/partials/chat/chat',
            controller: ''
        })
//about pages
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
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
        .when('/login', {
            templateUrl: '/partials/account/login',
            controller: 'LoginCtrl'
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
        .when('/admin/addFAQs', {
            templateUrl: '/partials/admin/addFAQs',
            controller: 'AddFAQsCtrl',
            resolve: routeUserChecks.adminRole
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
//Useful formulas
        .when('/formulas',{
            templateUrl: '/partials/usefulFormulas/usefulFormulas',
            controller: '',
            resolve: routeUserChecks.authenticated
        })
//Froum part
        .when('/forum',{
            templateUrl: '/partials/forum/forum',
            controller: 'QuestionsListCtrl'
        //    resolve: routeUserChecks.authenticated
        })
//routes gor algebra part
        .when('/algebra',{
            templateUrl: '/partials/algebra/algebra',
            controller: ''
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
        //Random trinagular
        .when('/geometry/randomTr/tr-per',{
            templateUrl: '/partials/geometry/triangular/randomTr/tr-per',
            controller: 'BlueprintsCtrl'
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
        //Equilateral triangle
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
        //Right-angled triangle
        .when('/geometry/right-angled-tr',{
            templateUrl: '/partials/geometry/triangular/right-angled-tr/right-angled-tr',
            controller: ''
        })
        .when('/geometry/right-angled-tr/metricalDep',{
            templateUrl: '/partials/geometry/triangular/right-angled-tr/metricalDep',
            controller: ''
        })
        .when('/geometry/right-angled-tr/small-radius',{
            templateUrl: '/partials/geometry/triangular/right-angled-tr/small-radius',
            controller: 'smallRadiusInRightAngledTrCtrl'
        })
    //for quadrilaterals
        //Random quadrilaterals
        .when('/geometry/randomQuadril/ranquadrila-per',{
            templateUrl: '/partials/geometry/quadrilaterals/randomQuadrilaterals/ranquadrila-per',
            controller: ''
        })
        .when('/geometry/randomQuadril/randomQuad-area',{
            templateUrl: '/partials/geometry/quadrilaterals/randomQuadrilaterals/randomQuad-area',
            controller: ''
        })
        //Rectangle
        .when('/geometry/rectangle/rec-per',{
            templateUrl: '/partials/geometry/quadrilaterals/rectangle/rec-per',
            controller: ''
        })
        .when('/geometry/rectangle/rec-area',{
            templateUrl: '/partials/geometry/quadrilaterals/rectangle/rec-area',
            controller: ''
        })
        .when('/geometry/rectangle/rec-sideFromPer',{
            templateUrl: '/partials/geometry/quadrilaterals/rectangle/rec-sideFromPer',
            controller: ''
        })
        .when('/geometry/rectangle/rec-sideFromArea',{
            templateUrl: '/partials/geometry/quadrilaterals/rectangle/rec-sideFromArea',
            controller: ''
        })
        //Square
        .when('/geometry/square/sq-per',{
            templateUrl: '/partials/geometry/quadrilaterals/square/sq-per',
            controller: ''
        })
        .when('/geometry/square/sq-area',{
            templateUrl: '/partials/geometry/quadrilaterals/square/sq-area',
            controller: ''
        })
        .when('/geometry/square/sq-sideFromPer',{
            templateUrl: '/partials/geometry/quadrilaterals/square/sq-sideFromPer',
            controller: ''
        })
        .when('/geometry/square/sq-sideFromArea',{
            templateUrl: '/partials/geometry/quadrilaterals/square/sq-sideFromArea',
            controller: ''
        })
        //Rhombus
        .when('/geometry/rhombus/rh-per',{
            templateUrl: '/partials/geometry/quadrilaterals/rhombus/rh-per',
            controller: ''
        })
        .when('/geometry/rhombus/rh-area',{
            templateUrl: '/partials/geometry/quadrilaterals/rhombus/rh-area',
            controller: ''
        })
        .when('/geometry/rhombus/rh-sideFromPer',{
            templateUrl: '/partials/geometry/quadrilaterals/rhombus/rh-sideFromPer',
            controller: ''
        })
        .when('/geometry/rhombus/rh-sideFromArea',{
            templateUrl: '/partials/geometry/quadrilaterals/rhombus/rh-sideFromArea',
            controller: ''
        })
        //Trapezoid
        .when('/geometry/trapezoid/trapezoid-kind',{
            templateUrl: '/partials/geometry/quadrilaterals/trapezoid/trapezoid-kind',
            controller: ''
        })
        .when('/geometry/trapezoid/equilateral-tr/equilateralTr',{
            templateUrl: '/partials/geometry/quadrilaterals/trapezoid/equilateralTr/equilateralTr',
            controller: ''
        })
    //Circle and round
        .when('/circle',{
            templateUrl: '/partials/geometry/roundAndCircle/circle',
            controller: 'circleCtrl'
        })
        .when('/round',{
            templateUrl: '/partials/geometry/roundAndCircle/round',
            controller: 'roundCtrl'
        })
    //Trigonometry
        .when('/geometry/trigonometry/sin',{
            templateUrl: '/partials/geometry/trigonometry/sin',
            controller: ''
        })
//Combinatorics pages
        .when('/combinatorics',{
            templateUrl: '/partials/combinatorics/combinatorics',
            controller: ''
        })
        .when('/combinatorics/permutation',{
            templateUrl: '/partials/combinatorics/permutation/permutation',
            controller: 'PermutationCtrl'
        })
        .when('/combinatorics/combination',{
            templateUrl: '/partials/combinatorics/combinations/combinations',
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
            controller: 'FAQsListCtrl'
        })
        .when('/about/support',{
            templateUrl: '/partials/about/support',
            controller: ''
        })
        .when('/about/about',{
            templateUrl: '/partials/about/about',
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
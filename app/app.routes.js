(function() {
'use strict';
angular
    .module('uclApp')
    .config(function($routeProvider) {
        $routeProvider

        //login route
        .when('/', {
            templateUrl: 'app/components/login/loginView.html',
            controller: 'loginController as ctrl'
        })
        
        //register route
        .when('/register', {
            templateUrl: 'app/components/register/registerView.html',
            controller: 'registerController as ctrl'
        })
        
        //home route
        .when('/home', {
            templateUrl: 'app/components/home/homeView.html',
            controller: 'homeController as ctrl'
        })
        
        //insert route
        .when('/insert', {
            templateUrl: 'app/components/insert/insertView.html',
            controller: 'insertController as ctrl'
        })
        
        //display route
        .when('/display', {
            templateUrl: 'app/components/display/displayView.html',
            controller: 'displayController as ctrl'
        })
        
        //details route
        .when('/details', {
            templateUrl: 'app/components/details/detailsView.html',
            controller: 'detailsController as ctrl'
        })
        
        //details route
        .when('/select', {
            templateUrl: 'app/components/select/selectView.html',
            controller: 'selectController as ctrl'
        });

    });
    
}());
    
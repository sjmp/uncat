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
        });

    });
    
}());
    
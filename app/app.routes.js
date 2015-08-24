(function() {
'use strict';
angular
    .module('uclApp')
    .config(function($routeProvider) {
        $routeProvider

        //story router
        .when('/', {
            templateUrl: 'app/components/login/loginView.html',
            controller: 'loginController as ctrl'
        });

    });
    
}());
    
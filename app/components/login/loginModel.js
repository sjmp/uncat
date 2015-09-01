(function() {
    'use strict';
    angular
        .module('uclApp')   
        .service('loginModel', function($location, authModel) {
            var self = this;
        
            self.submit = function(loginattempt){
                //This would be where a http connection to the database or connection to a PHP file to assist login would sit
                if (loginattempt.username == 'uncatuser' && loginattempt.password == '12345'){
                    authModel.setUser(loginattempt.username);
                    $location.path('/home');
                }else{
                    alert("Login details incorrect. Username is uncatuser, password is 12345");
                };
            };

                
    });
}());
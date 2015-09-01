(function() {
    'use strict';
    angular
        .module('uclApp')   
        .service('registerModel', function($location, authModel) {
            var self = this;
        
            self.submit = function(registerattempt){
            //This would be where a http connection to the database or connection to a PHP file to assist login would sit
                alert("Username "+registerattempt.username+" Password "+registerattempt.password+" DOB "+registerattempt.dob+" Gender "+registerattempt.gender);
                $location.path('/');
            };

                
    });
}());
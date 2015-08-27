(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('loginController', function($location) {
            var self = this;
        
            this.submit = function(){
                console.log(self.user);
                $location.path('/home');
            };
                
    });
}());
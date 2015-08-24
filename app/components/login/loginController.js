(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('loginController', function() {
            var self = this;
        
            this.submit = function(){
                console.log(self.user);
            };
                
    });
}());
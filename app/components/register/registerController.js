(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('registerController', function(registerModel) {
            var self = this;
            
            self.submit = function(){
                registerModel.submit(self.user);
            };
            
                
    });
}());
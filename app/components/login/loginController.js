(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('loginController', function(loginModel) {
            var self = this;
        
            this.submit = function(){
                loginModel.submit(self.user);
            };
                
    });
}());
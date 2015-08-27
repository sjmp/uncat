(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('insertController', function() {
            var self = this;
        
            self.submit = function(){  
                console.log(self.insertObject);
            };
        
                
    });
}());
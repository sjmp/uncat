(function() {
    'use strict';
    angular
        .module('uclApp')   
        .service('homeModel', function($location, authModel) {
            var self = this;
            
            self.user = authModel.getUser();
                
    });
}());
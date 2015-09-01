(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('homeController', function(homeModel) {
            var self = this;
        
            self.user = homeModel.user;
    });
}());
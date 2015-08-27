(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('detailsController', function() {
            var self = this;
            self.tab = 'Pie';
        
            self.piedata = [
                {label: "Sample Value", value: 80, suffix: "%", color: "blue"}
            ];
            self.pieoptions = {thickness: 40, mode: "gauge", total: 100};
                
    });
}());
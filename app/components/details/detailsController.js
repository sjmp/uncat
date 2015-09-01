(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('detailsController', function(detailsModel) {
            var self = this;
            self.tab = 'Pie';
        
            self.bigpiedata = [
                {label: "one", value: 12.2, color: "red"}, 
                {label: "two", value: 45, color: "#00ff00"},
                {label: "three", value: 10, color: "rgb(0, 0, 255)"}
            ];
            
            self.leftpiedata = [
                {label: "one", value: detailsModel.datagraph[0], color: "red"}, 
                {label: "two", value: detailsModel.datagraph[1], color: "blue"},
                {label: "three", value: detailsModel.datagraph[2], color: "green"},
                {label: "four", value: detailsModel.datagraph[3], color: "yellow"},
                {label: "five", value: detailsModel.datagraph[4], color: "purple"}
            ];
            
            self.guagedata = [
                {label: "Guage", value: 155, color: "#d62728", suffix: "%"}
                ];
            
            self.pieoptionsA = {thickness: 80};
            self.pieoptionsB = {thickness: 200};
            self.guageoptions = {thickness: 40, mode: "gauge", total: 360};
        
        
            self.barlength = 90;
    });
}());
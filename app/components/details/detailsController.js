(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('detailsController', function() {
            var self = this;
            self.tab = 'Pie';
        
            self.bigpiedata = [
                {label: "one", value: 12.2, color: "red"}, 
                {label: "two", value: 45, color: "#00ff00"},
                {label: "three", value: 10, color: "rgb(0, 0, 255)"}
            ];
            
            self.leftpiedata = [
                {label: "one", value: 10, color: "red"}, 
                {label: "two", value: 15, color: "blue"},
                {label: "three", value: 50, color: "green"},
                {label: "four", value: 20, color: "yellow"},
                {label: "five", value: 5, color: "purple"}
            ];
            
            self.guagedata = [
                {label: "Guage", value: 155, color: "#d62728", suffix: "%"}
                ];
            
            self.pieoptionsA = {thickness: 80};
            self.guageoptions = {thickness: 40, mode: "gauge", total: 360};
    });
}());
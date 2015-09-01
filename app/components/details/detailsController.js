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
                {label: "one", value: detailsModel.data[0], color: "red"}, 
                {label: "two", value: detailsModel.data[1], color: "blue"},
                {label: "three", value: detailsModel.data[2], color: "green"},
                {label: "four", value: detailsModel.data[3], color: "yellow"},
                {label: "five", value: detailsModel.data[4], color: "purple"}
            ];
            
            self.guagedata = [
                {label: "Guage", value: 155, color: "#d62728", suffix: "%"}
                ];
            
            self.pieoptionsA = {thickness: 80};
            self.pieoptionsB = {thickness: 200};
            self.guageoptions = {thickness: 40, mode: "gauge", total: 360};
            
            self.linedata = [
                {x: 0, value: detailsModel.data[0], otherValue: 14},
                {x: 1, value: detailsModel.data[1], otherValue: 1},
                {x: 2, value: detailsModel.data[2], otherValue: 11},
                {x: 3, value: detailsModel.data[3], otherValue: 147},
                {x: 4, value: detailsModel.data[4], otherValue: 87},
                {x: 5, value: detailsModel.data[5], otherValue: 45}
            ];
            self.lineoptions = {
                axes: {
                    x: {key: 'x', type: 'linear', min: 0, max: 5, ticks: 5},
                    y: {type: 'linear', min: 0, max: 50, ticks: 20, grid: true},
                },
                    margin: {
                    left: 150
                },
                    series: [
                        {y: 'value', color: 'red', thickness: '3px', type: 'area', striped: true, label: 'Data'},
                    ],
                    lineMode: 'linear',
                    hideOverflow: false,
                    columnsHGap: 5
                };
    });
}());
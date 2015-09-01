(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('displayController', function(displayModel) {
            var self = this;
        
            self.title = "Display Page";
            self.subtitle = "Displaying a range of data in textual format is a key use case in most NHS cloud applications. This page simulates this, as well as uses the same view as Select (sharedView) with contextual text being piped in from Controllers and ng-show and ng-hide hiding elements.";
            
            self.dummyitems = displayModel.dummy();
            
            self.calculateAverage = function(){
                for (var i = 0; i < self.dummyitems.length; i++){
                    var highestmark = self.dummyitems[i].highestmark;
                    var lowestmark = self.dummyitems[i].lowestmark;
                    var averagemark = (lowestmark + highestmark)/2;
                    self.dummyitems[i].averagemark = averagemark;
                };
            };
            self.calculateAverage();
            
            displayModel.async()
                .then(function(d){
                    self.JSONmessages = d;
            });
    
    });
}());
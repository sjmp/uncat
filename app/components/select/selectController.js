(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('selectController', function() {
            var self = this;
            self.title = "Select Page";
            self.subtitle = "This page uses the same view as Select (sharedView) with contextual text being piped in from Controllers and ng-show and ng-hide hiding elements, with the added functionality of being able to select and submit objects below, while adding in your own comments. This is in line with functionality seen in other NHS Cloud Application";
            
            self.dummyitems = [{ 
                "name": "Ross Perk",
                "title": "Doctor",
                "patients":[
                    {"nhsno":"1234567890"},
                    {"nhsno":"1234554321"},
                    {"nhsno":"1231231230"},
                    {"nhsno":"0987654321"}
                        ],
              },
              { 
                "name": "Rachel Bing",
                "title": "Surgeon",
                "patients":[
                    {"nhsno":"1111111111"},
                    {"nhsno":"1234554321"},
                    {"nhsno":"1231231230"},
                        ],
              },
              { 
                "name": "Joey Tribiani",
                "title": "Acting Doctor",
                "patients":[
                    {"nhsno":"1111111111"},
                    {"nhsno":"1234554321"},
                    {"nhsno":"1231231230"},
                    {"nhsno":"0987654321"},
                    {"nhsno":"1234432111"},
                    {"nhsno":"1100110011"},
                    {"nhsno":"0123012301"},
                        ],
              },
            { 
                "name": "Chandler Gear",
                "title": "Senior Doctor",
                "patients":[
                    {"nhsno":"1011111101"},
                        ],
              },            
            { 
                "name": "Monica Perk",
                "title": "Psychoanalyst",
                "patients":[
                    {"nhsno":"1234123455"},
                    {"nhsno":"0987654321"},
                        ],
              },  
            { 
                "name": "Phoebe Partridge",
                "title": "Psychoanalyst",
                "patients":[
                    {"nhsno":"1111122222"},
                    {"nhsno":"0987654321"},
                        ],
              },  
            ];
                
    });
}());
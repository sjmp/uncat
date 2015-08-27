(function() {
    'use strict';
    angular
        .module('uclApp')   
        .controller('displayController', function() {
            var self = this;
        
            self.samplejsonitems = [{ 
                "name": "Dean Mohamedally",
                "title": "Doctor",
                "areas":[
                    {"name":"Software Engineering"},
                    {"name":"Design Patterns"},
                    {"name":"Industry Projects"},
                    {"name":"Game Development"}
                        ],
                "birthplace":"London",
                "highestmark": 80,
                "lowestmark": 30,
              },
              {
                "name": "Graham Roberts",
                "title": "Doctor",
                "areas":[
                    {"name":"Software Engineering"},
                    {"name":"Project Management"},
                    {"name":"Web Development"}
                        ],
                "highestmark": 70,
                "lowestmark": 50,
              },
              {
                "name": "Kevin Bryson",
                "title":"Doctor",
                "areas":[
                    {"name":"Biotechnology"},
                    {"name":"Kung-Fu"}
                        ],
                "birthplace":"Scottish Highlands",
                "highestmark": 90,
                "lowestmark": 60,
              }
            ];
        
                
    });
}());
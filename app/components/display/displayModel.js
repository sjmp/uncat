(function() {    
    'use strict';
    angular
        .module('uclApp')
        .factory('displayModel', function($http){
            var dataService = {
                //Promise based connection to a database
                async: function() {
                    var promise = $http.get('http://jsonplaceholder.typicode.com/comments?postId=1')
                        .then(function (response) {
                            return response.data;
                        });
                    return promise;
                },
                
                //Example of what the above JSON data may look like
                dummy: function(){
                    var dummydata = [{ 
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
                    return dummydata;
                }
            };
            return dataService;

    });
}());
 

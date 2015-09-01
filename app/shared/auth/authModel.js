(function() {
    'use strict';
    angular
        .module('uclApp')    
        .factory('authModel', function(){

            return{
                setUser : function(user){
                    localStorage.setItem("user", user);
                },
                getUser : function(){
                    return localStorage.getItem("user");
                }
              }
        });
    }());
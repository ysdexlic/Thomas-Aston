angular.module('common.services.services',[]).factory('basicFactory',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
    'use strict';
    return {
        getAll:function(chosenClass){
            return $http.get('https://api.parse.com/1/classes/'+chosenClass,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                }
            });
        },
        get:function(chosenClass, id){
            return $http.get('https://api.parse.com/1/classes/'+chosenClass+'/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                }
            });
        },
        create:function(chosenClass, data){
            return $http.post('https://api.parse.com/1/classes/'+chosenClass,data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(chosenClass, id,data){
            return $http.put('https://api.parse.com/1/classes/'+chosenClass+'/'+id,data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        delete:function(chosenClass, id){
            return $http.delete('https://api.parse.com/1/classes/'+chosenClass+'/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        }
    };
}]).value('PARSE_CREDENTIALS',{
    APP_ID: 'ETIgcYh6BlsvRhYV3OKWvGMSj9dpiguv18N9vQm0',
    REST_API_KEY:'wc4cElxDKqz64hdxlfL00G7AzfwQE47O6SNTc09E'
});
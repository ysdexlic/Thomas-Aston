angular.module('common.controllers.controllers',[])
.controller('ListController',['$scope','basicFactory',function($scope,basicFactory){

    'use strict';

    basicFactory.getAll().success(function(data){
        $scope.items=data.results;
        console.log($scope.items);
    });

    $scope.onItemDelete=function(item){
        basicFactory.delete(item.objectId);
        $scope.items.splice($scope.items.indexOf(item),1);
    };

}]);

/*
.controller('CreationController',['$scope','basicFactory',function($scope,basicFactory){

    $scope.obj={};

    $scope.create=function(){
        basicFactory.create({content:$scope.obj.content}).success(function(data){
            //console.log(data)
            //$state.go('todos');
        });
    };


}]).controller('EditController',['$scope','basicFactory','$state','$stateParams',function($scope,basicFactory,$state,$stateParams){

    $scope.obj={id:$stateParams.id,content:$stateParams.content};

    $scope.edit=function(){
        basicFactory.edit($scope.obj.id,{content:$scope.obj.content}).success(function(data){
            //$state.go('todos');
        });
    };

}]).controller('UserController',['$scope','userFactory',function($scope,userFactory){

    $scope.user={};

    $scope.signUp=function(){
        userFactory.signUp($scope.user.username, $scope.user.pass).success(function(data){
            console.log('user created: ' + data);
            //$state.go('todos');
        });
    };

    $scope.currentUser=function(){
        userFactory.currentUser('r:BMXvkJe3K7qF7nvez1SMLbsq0').success(function(data){
            console.log(data);
        });
    };

}]);
*/
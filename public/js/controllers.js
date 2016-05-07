'use strict';

var app = angular.module('myFaceApp');


app.controller('mainController', function($scope, AuthService) {
    AuthService.getProfile()
        .then(res => {
            $scope.user = res.data;
        })
        .catch(err => {
            $scope.user = null;
        });

});

app.controller('usersController', function($scope, UserService) {
    
    $scope.login = () => {
        UserService.update($scope.loginUser)
        .then(res => {
            $scope.loginUser = "";
           
        })
        .catch(err => {
            console.log('err:', err);
        });   
    }

    $scope.register = function(addUser) {
        UserService.create($scope.addUser)
        .then(res => {
            $scope.addUser = "";
        })
        .catch(err => {
            console.log('err:', err);
        });  
    }

});

app.controller('profilesController', function($scope, ProfileService) {
    register()


});
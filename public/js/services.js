'use strict';

var app = angular.module('myFaceApp');

app.service('AuthService', function($http) {
	this.getProfile = () => {
		return $http.get('/apa/users/profile');
	}
})


app.service('UserService', function($http) {

	this.update = (user) => {
		return $http.put(`api/users/login`, user);
	}

	this.create = (user) => {
		return $http.post('api/users', user);
	}

})

app.service('ProfileService', function($http) {
    

})


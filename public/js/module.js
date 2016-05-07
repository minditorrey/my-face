var app = angular.module('myFaceApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('users', {
			url: '/users',
			templateUrl: '/templates/users.html',
			controller: 'usersController'
		})
		.state('profiles', {
			url: '/profiles',
			templateUrl: '/templates/profiles.html',
			controller: 'profilesController'
		})



	$urlRouterProvider.otherwise('/');

});
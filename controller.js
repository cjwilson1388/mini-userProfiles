var app = angular.module('userProfiles');

app.controller('mainControl', function($scope, mainService) {
		$scope.users = mainService.getUsers();
});
angular.module('acimsApp.controllers', [])

.controller('HomeCtrl', function($http, listService, $scope) {
  console.log('HomeCtrl is working');

$scope.pullList = function() {
  $scope.data = listService.getList();
  console.log($scope.data);
};

$scope.pullList();

});

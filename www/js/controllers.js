angular.module('acimsApp.controllers', [])

.controller('MainCtrl', function($http, $scope, $state, $ionicSideMenuDelegate) {
  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
.controller('SearchCtrl', function($http, listService, $scope, $state) {
  $scope.pullList = function() {
    $scope.data = listService.getList();
  };
  $scope.pullList();
})

.controller('AboutCtrl', function($http, $scope, $state) {
  })

.controller('HomeCtrl', function($http, $scope, $state) {
  })



.controller('speciesCtrl', function($http, $scope, $stateParams, speciesService, $state) {
  //get ID
  $scope.id = $stateParams.ID;
  //Pull JSON for species
  $scope.pullSpecies = function(id) {
    $scope.data = speciesService.getSpecies(id);
  };
  $scope.pullSpecies($scope.id);
});

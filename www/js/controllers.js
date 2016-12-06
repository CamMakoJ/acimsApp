angular.module('acimsApp.controllers', [])

.controller('MainCtrl', function($http, $scope, $state, $ionicSideMenuDelegate) {
  console.log('MainCtrl is working');
  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  console.log($state);
})
.controller('SearchCtrl', function($http, listService, $scope, $state) {
  console.log('SearchCtrl is working');
  $scope.pullList = function() {
    $scope.data = listService.getList();
  };

  $scope.pullList();

})

.controller('AboutCtrl', function($http, $scope, $state) {
  console.log('AboutCtrl is working');
})

.controller('HomeCtrl', function($http, $scope, $state) {
  console.log('HomeCtrl is working');
})



.controller('speciesCtrl', function($http, $scope, $stateParams, speciesService, $state) {
  //  console.log('speciesCtrl is working');
  //get ID
  $scope.id = $stateParams.ID;
  //Pull JSON for species
  $scope.pullSpecies = function(id) {
    $scope.data = speciesService.getSpecies(id);
  };
  $scope.pullSpecies($scope.id);
});

angular.module('acimsApp.controllers', [])

.controller('MainCtrl', function($http, $scope, $state, $ionicSideMenuDelegate) {
  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
.controller('SearchCtrl', function($http, listService, $scope, $state) {
  $scope.filterInput = '';

  $scope.pullList = function() {
    $scope.data = listService.getList();
  };
  $scope.pullList();
})

.controller('AboutCtrl', function($http, $scope, $state) {
  })

.controller('HomeCtrl', function($http, $scope, $state) {
  function onDeviceReady() {
    admob.createBannerView({publisherId: "ca-app-pub-5841639947461001/2632111177"});
  }

  document.addEventListener('deviceready', onDeviceReady, false);


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

angular.module('acimsApp.controllers', [])

  .controller('MainCtrl', function($http, $scope, $state, $ionicSideMenuDelegate) {
    $scope.openMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  })

  .controller('SearchCtrl', function(listService, $scope, $rootScope, $window) {

    $scope.updateFilter = function() {
      $rootScope.filterInput = $scope.filterInput;
    };


    $scope.pullList = function() {
      $scope.run = listService.getList().then(function(data) {
        $scope.data = data;
      });
    };

    $scope.pullList();

    this.listStyle = {
      height: ($window.innerHeight - 112) + 'px'
    };
    $window.addEventListener('resize', onResize);

    function onResize() {
      self.listStyle.height = ($window.innerHeight - 112) + 'px';
      if (!$scope.$root.$$phase) $scope.$digest();
    }

  })

  .controller('AboutCtrl', function($http, $scope, $state) {
    $scope.sendMail = function() {
      var mailWindow = window.open('mailto:Cam@MakoJ.com?subject=ACIMS App');
      mailWindow.close();
    };
  })

  .controller('HomeCtrl', function($http, $scope, $state) {})


  .controller('speciesCtrl', function($http, $scope, $stateParams, speciesService, $state, $ionicScrollDelegate) {
    $ionicScrollDelegate.anchorScroll();

    //get ID
    $scope.id = $stateParams.ID;
    //Pull JSON for species
    $scope.pullSpecies = function(id) {
      $scope.data = speciesService.getSpecies(id);
    };
    $scope.pullSpecies($scope.id);
  })


  .controller('rankingsCtrl', function($scope) {});

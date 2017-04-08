angular.module('acimsApp.controllers', [])

  .controller('MainCtrl', function($http, $scope, $state, $ionicSideMenuDelegate) {
    $scope.openMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  })

  .controller('SearchCtrl', function(listService, $scope, $rootScope) {

    $scope.updateFilter = function() {
      $rootScope.filterInput = $scope.filterInput;
    };

    $scope.pullList = function() {
      $scope.run = listService.getList().then(function(data){
        $scope.data = data;
      });
      };
    $scope.pullList();
  })

  .controller('AboutCtrl', function($http, $scope, $state) {
    $scope.sendMail = function() {
      var mailWindow = window.open('mailto:Cam@MakoJ.com?subject=ACIMS App');
      mailWindow.close();
    };
  })

  .controller('HomeCtrl', function($http, $scope, $state) {
    function onDeviceReady() {
      admob.createBannerView({
        publisherId: "ca-app-pub-5841639947461001/2632111177"
      });
    }

    document.addEventListener('deviceready', onDeviceReady, false);


  })

  .controller('speciesCtrl', function($http, $scope, $stateParams, speciesService, $state, $uiViewScroll, $ionicScrollDelegate) {
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

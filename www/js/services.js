angular.module('acimsApp.services', [])

.factory('listService', function($http) {
  return {
    getList: function() {
      var obj = {};
      $http.get('js/list.json').success(function(data) {
        //any processing can go here
        obj.content = data;
      });
      return obj;
    }
  };
})

.factory('speciesService', function($http) {
  return {
    getSpecies: function(val) {
      var obj = {};
      $http.get('js/list.json').success(function(data) {
        //any processing can go here (returns 1 species, with ID = val)
        obj.content = data[val];
      });
      return obj;
    }
  };
});

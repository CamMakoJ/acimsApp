angular.module('acimsApp.services', [])

  .factory('listService', function($http, $q) {
    return {
      getList: function() {
        var deffered = $q.defer();
        var obj = [];
        $http.get('js/list.json').success(function(data) {
            deffered.resolve(data);
          //any processing can go here maybe?
        //obj.content = data;
        });
        return deffered.promise;
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

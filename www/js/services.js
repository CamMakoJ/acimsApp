angular.module('acimsApp.services', [])

.factory('listService', function($http) {
return {
  getList : function() {
    var obj = {};
    $http.get('js/list.json').success(function(data) {
      //any processing can go here
      obj.content = data;
    });
    return obj;
  }
};
});

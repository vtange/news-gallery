(function() {
    //start of function
  var app = angular.module('NewsSearcher', ['filters']);

app.factory('memory', function($http){

  var baseUrl = "http://www.freecodecamp.com/news/hot";//for some reason this site can be HTTPGet'ed for json

  var storage = {};
 storage.datadata = [];
                                                $http.get(baseUrl + "?callback=JSON_CALLBACK").success(function(data) {//for some reason this site can be HTTPGet'ed for json
                                                    // you can do some processing here
                                                     storage.datadata = data;
                                                    console.log(storage.datadata);
                                                });
                                                //end info pulling
  return storage;
});//end of service

app.controller('MainCtrl', ['$scope', 'memory', function($scope, memory){
    $scope.storage = memory; // load service
}]);//end of controller
  //end of function
})();

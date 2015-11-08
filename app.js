(function() {
    //start of function
  var app = angular.module('NewsSearcher', ['filters']);

app.factory('memory', function($http){

  var baseUrl = "http://www.freecodecamp.com/news/hot";

  var storage = {};
 storage.datadata = [];
                                                $http.get(baseUrl + "?callback=JSON_CALLBACK").success(function(data) {
                                                    // you can do some processing here
                                                     storage.datadata = data;
                                                    console.log(storage.datadata);
                                                }); 
    //end info pulling

  return storage;
});//end of service

app.controller('MainCtrl', ['$scope', 'memory', function($scope, memory){
    $scope.storage = memory; // load service

    $scope.checkPic = function(user){
        if (user.image == "") {
            return false;
        }
        else {
         return true;
        };
    }


    
}]);//end of controller
  //end of function
})();

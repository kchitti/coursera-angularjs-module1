(function () {
'use strict';

  angular.module('lunchCheck',[])

  .controller('LunchCheckController', function($scope) {
    $scope.message = "";
    $scope.dishList = "";
    $scope.checkDishes = function() {
      if(!$scope.dishList) {
        $scope.message =  "Please enter data first";
      }
      else {
        var dishes = $scope.dishList.split(',');
        if (dishes.length <= 3) {
          $scope.message = "Enjoy!";
        }
        else {
          $scope.message = "Too much!";
        }
      }
    };
  });
})();

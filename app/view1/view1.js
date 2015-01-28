'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
  $scope.m = 0;
  $scope.n = 0;
  $scope.data = [];
  $scope.createTable = function() {
    var plusOrMinus,
        i,
        j,
        randomNumber,
        multi;
    $scope.data = [];
    for(i = 0; i < $scope.m; i++){
      $scope.data.push([]);
      for(j = 0; j < $scope.n; j++){
        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        randomNumber = Math.floor(Math.random() * (100-0+1));
        multi = plusOrMinus * randomNumber;
        $scope.data[i].push(multi);
        console.log($scope.data[i][i]);
      }
    }
    $scope.sumRows();
    $scope.sumCols();
  };
  $scope.sumOfRows = [];
  $scope.sumRows = function() {
    $scope.sumOfRows = [];
    var i,
        j;
    for(i = 0 ; i < $scope.m; i ++){
      var sum = 0;
      for(j = 0; j < $scope.n; j++){
        sum+= $scope.data[i][j];
      }
      $scope.sumOfRows.push(sum);
    }

  };
  $scope.sumOfCols = [];
  $scope.sumCols = function(){

    $scope.sumOfCols = [];
    var i,j;
    for(j = 0 ; j < $scope.n; j ++){
      var sum = 0;
      for(i = 0; i < $scope.m; i++){
        sum+= $scope.data[i][j];
      }
      $scope.sumOfCols.push(sum);
    }

  };
  $scope.switchCol = function(m){
    var i;
    for(i = 0; i < $scope.m; i++){
      $scope.data[i][m] =  $scope.data[i][m]  * -1;
    }
    $scope.sumRows();
    $scope.sumCols();
  };
  $scope.switchRows = function(n){
    var i;
    for(i = 0; i < $scope.n; i++){
      $scope.data[n][i] = $scope.data[n][i] * -1;
    }
    $scope.sumRows();
    $scope.sumCols();
  };

}]);

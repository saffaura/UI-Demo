(function() {
  angular.module('vonigo')
  .controller('ToolbarController', ['$scope', function($scope) {
    $scope.username = "Star Lord";
    $scope.userimg = "images/user1.png";
    $scope.calendar = 9;
    $scope.tasks = 2;
  }]);
})();

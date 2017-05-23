(function() {
    angular.module('vonigo')
    .directive('messageBoard', [function() {
      return {
        restrict: 'EA',
        controller: 'MessageBoardController',
        templateUrl: 'messageBoard/messageBoard.html'
      };
    }]);
})();

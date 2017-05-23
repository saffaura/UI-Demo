(function() {
    angular.module('vonigo')
    .directive('toolbar', [function() {
      return {
        restrict: 'EA',
        controller: 'ToolbarController',
        templateUrl: 'toolbar/toolbar.html'
      };
    }]);
})();

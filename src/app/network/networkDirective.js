(function() {
    angular.module('vonigo')
    .directive('network', [function() {
      return {
        restrict: 'EA',
        controller: 'NetworkController',
        templateUrl: 'network/network.html'
      };
    }]);
})();

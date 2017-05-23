(function() {
    angular.module('vonigo')
    .directive('dashboard', [function() {
      return {
        restrict: 'EA',
        controller: 'DashboardController',
        templateUrl: 'dashboard/dashboard.html'
      };
    }]);
})();

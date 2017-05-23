(function() {
  angular.module('vonigo')
  .controller('DashboardController', ['$scope', function($scope) {
    $scope.items =
      [{
        icon: "fa fa-user-o",
        title: "New Clients",
        date: "Last 7 days",
        count: "25"
      }, {
        icon: "fa fa-map-marker",
        title: "New Work Orders",
        date: "Last 24 HOURS",
        count: "13"
      }, {
        icon: "fa fa-map-marker",
        title: "New Quotes",
        date: "Last month",
        count: "249"
      }, {
        icon: "fa fa-map-marker",
        title: "New Invoices",
        date: "Today",
        count: "68"
      }, {
        icon: "fa fa-map-marker",
        title: "Open Cases",
        date: "Since launch",
        count: "1898"
      }];
  }]);
})();

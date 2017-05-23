(function() {
    angular.module('vonigo')
    .directive('sidebarLeft', [function() {
      return {
        restrict: 'EA',
        templateUrl: 'sidebarLeft/sidebarLeft.html',
        link: function(scope, element, attr) {
          scope.mainItems =
          [{
            icon: "fa fa-star",
            text: "Dashboard"
          }, {
            icon: "fa fa-star",
            text: "Calls"
          }, {
            icon: "fa fa-star",
            text: "Quotes"
          }, {
            icon: "fa fa-star",
            text: "Leads"
          }, {
            icon: "fa fa-star",
            text: "Accounts"
          }, {
            icon: "fa fa-star",
            text: "Jobs"
          }, {
            icon: "fa fa-star",
            text: "Schedule"
          }, {
            icon: "fa fa-star",
            text: "Invoices"
          }, {
            icon: "fa fa-star",
            text: "Cases"
          }, {
            icon: "fa fa-star",
            text: "Reports"
          }];

          scope.moreItems =
          [{
            icon: "fa fa-star",
            text: "Library"
          }, {
            icon: "fa fa-star",
            text: "Directory"
          }, {
            icon: "fa fa-star",
            text: "Help"
          }];

          scope.settings =
          [{
            icon: "fa fa-star",
            text: "Franchise"
          }, {
            icon: "fa fa-star",
            text: "Corporate"
          }, {
            icon: "fa fa-star",
            text: "Setup"
          }];
        }
      };
    }]);
})();

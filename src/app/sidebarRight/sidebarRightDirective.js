(function() {
    angular.module('vonigo')
    .directive('sidebarRight', [function() {
      return {
        restrict: 'EA',
        templateUrl: 'sidebarRight/sidebarRight.html',
        link: function(scope, element, attr) {
          scope.followers = [
            "images/follower1.jpg",
            "images/follower2.jpg",
            "images/follower3.jpg",
            "images/follower4.jpg",
            "images/follower5.jpg",
            "images/follower7.jpg",
            "images/follower8.jpg"
          ];
        }
      };
    }]);
})();

(function() {
    angular.module('vonigo')
    .directive('sidebarRight', [function() {
      return {
        restrict: 'EA',
        templateUrl: 'sidebarRight/sidebarRight.html',
        link: function(scope, element, attr) {
          scope.followers = [
            "images/follower1.png",
            "images/follower2.png",
            "images/follower3.png",
            "images/follower4.png",
            "images/follower5.png",
            "images/follower7.png",
            "images/follower8.png"
          ];
        }
      };
    }]);
})();

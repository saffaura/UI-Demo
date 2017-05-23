(function() {
    angular.module('vonigo')
    .directive('postWrapper', [function() {
      return {
        restrict: 'EA',
        templateUrl: 'postWrapper/postWrapper.html',
        scope: {
          message: '='
        },
        link: function(scope, element, attr) {
          $(".comment-input").focus(function() {
            $(this).next().show();
          });

          $(".cancel").click(function() {
            $(this).parent().fadeOut();
          });
        }
      };
    }]);
})();

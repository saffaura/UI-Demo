(function() {
  angular.module('vonigo')
  .controller('MessageBoardController', ['$scope', function($scope) {
    $scope.messages =
    [{
      'user': {
        'username': 'Nova Prime',
        'image': 'images/user5.jpg'
      },
      'date': '2 hours ago',
      'content': 'Special thanks to baby Groot for pushing the right button',
      'image': 'images/content1.jpg',
      'comments' : {
        'length': '3',
        'username': 'Groot',
        'userimg': 'images/user4.jpg',
        'content': 'I am Groot!'
      }
    }, {
      'user': {
        'username': 'Drax the Destroyer',
        'image': 'images/user3.jpg'
      },
      'date': '1 hour ago',
      'content': 'Can we get a raise? I require funding for a larger toilet.'
    }];

    console.log('messages: ' + $scope.messages[0].user.username);
  }]);
})();

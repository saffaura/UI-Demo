(function() {
  angular.module('vonigo')
  .controller('NetworkController', ['$scope', function($scope) {
    $scope.networkMessages =
    [{
      'user': {
        'username': 'Gamora',
        'image': 'images/user2.png'
      },
      'date': '2 hours ago',
      'content': 'I have attached this file. I\'m not really sure what it is.',
      'attachment': {
        'name': 'Vonigo_App_9ht.psd',
        'type': 'Photoshop file',
        'size': '13mb'
      },
      'comments' : {
        'length': '3',
        'username': 'Drax the Destroyer',
        'userimg': 'images/user3.png',
        'content': 'Peter said he really likes your file.',
        'time': '5:44 pm'
      }
    }, {
      'user': {
        'username': 'Groot',
        'image': 'images/user4.png'
      },
      'date': '1 hour ago',
      'content': 'I am Groot.',
      'comments' : {
        'length': '18',
        'username': 'Gamora',
        'userimg': 'images/user2.png',
        'content': 'Great job, Groot!',
        'time': '5:44 pm'
      }
  }];

  }]);
})();

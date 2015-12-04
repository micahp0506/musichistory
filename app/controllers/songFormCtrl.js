app.controller("SongFormCtrl", ["$scope", "$firebaseArray",  
    function($scope, $firebaseArray) {

      // Firebase reference
      var ref = new Firebase("https://brilliant-heat-5523.firebaseio.com/songs");
      $scope.songs = $firebaseArray(ref);
      $scope.newSong = {};

      $scope.addSong = function() {
        console.log("click");
        $scope.songs.$add({
          title: $scope.newSong.title,
          artist: $scope.newSong.artist,
          album: $scope.newSong.album
        });
      };
    }
  ]
);
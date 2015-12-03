app.controller("SongFormCtrl", ["$scope", "songstorage",  
    function($scope, songstorage) {
      $scope.newSong = {};

      $scope.addSong = function() {
        console.log("click");
        songstorage.addSong({
          title: $scope.newSong.title,
          artist: $scope.newSong.name,
          album: $scope.newSong.album
        });
      };
    }
  ]
);
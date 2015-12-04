app.controller("MusicHistoryCtrl", ["$scope", "$firebaseArray", 
	function($scope, $firebaseArray) {

		$scope.songs =[];
		$scope.moreSongs = [];


// Getting data from first JSON file
		songstorage.loadSongs().then(
			function(songs) {
				$scope.songs = songstorage.getSongs();
			}, function (error) {
				console.log(error);
			}
		);

}]);
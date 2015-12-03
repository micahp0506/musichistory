app.controller("MusicHistoryCtrl", ["$q", "$http", "$scope", "songstorage", function($q, $http, $scope, songstorage) {

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

	songstorage.getMoreSongs().then(
		function(songs) {
			$scope.moreSongs = songstorage.getSongs();
			$scope.songs = $scope.songs.concat($scope.moreSongs);
		}, function (error) {
			console.log(error);
		}
		);

}]);
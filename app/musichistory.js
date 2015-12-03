var app = angular.module("MusicHistoryApp", []);

app.controller("MusicHistoryCtrl", ["$q", "$http", "$scope", function($q, $http, $scope) {

$scope.combinedArray =[];
$scope.artist = "";
$scope.filterAlbum = "";

// Getting data from first JSON file
var getSongs =$q(function(resolve, reject){
	$http.get('./data/songs.json')
	.success(
		function(objectFromJSONFile) {
			resolve(objectFromJSONFile);
			console.log("objectFromJSONFile", objectFromJSONFile);
		}, function(error) {
			reject(error);
		}
		);
	});

// Resloving Promise and sending data to array
getSongs.then(function (songs) {
    console.log("songs", songs);
	$scope.combinedArray = songs.songs;
    console.log("combinedArray", $scope.combinedArray);
  }, function (error) {
    console.log("Failed");
  });

// Getting data from second JSON file
var getSongsToo =$q(function(resolve, reject){
	$http.get('./data/songs2.json')
	.success(
		function(objectFromJSONFile) {
			resolve(objectFromJSONFile);
			console.log("$objectFromJSONFile", objectFromJSONFile);
		}, function(error) {
			reject(error);
		}
		);
	});

// Resloving Promise and concating data form both JSON files
getSongsToo.then(function (moreSongs) {
    console.log("moreSongs", moreSongs);
    // $scope.toggleChecked = function (item, index) {
    $scope.combinedArray = $scope.combinedArray.concat(moreSongs.songs);	
    console.log("combinedArray", $scope.combinedArray);
  }, function (error) {
    console.log("Failed");
  });


}]);
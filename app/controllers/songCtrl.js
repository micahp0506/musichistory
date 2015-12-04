app.controller("MusicHistoryCtrl", ["$scope", "$firebaseArray", 
	function($scope, $firebaseArray) {

		// $scope.songs =[];
		

	// Firebase reference
	var ref = new Firebase("https://brilliant-heat-5523.firebaseio.com/songs");
	// Showing songs from Firebase
	$scope.songs = $firebaseArray(ref);

}]);
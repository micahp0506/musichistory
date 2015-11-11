define(["jquery", "lodash", "populate-songs", "songsIWant"],
function($, _, populate, songsIWant) {






		// Delete buttons
$(document).on("click", ".delete", function() {
	
		console.log("delete button is working!!!!");
		// Removing selected item from DOM
		var songKey = $(this).attr('id');
		console.log("songKey", songKey);
		$.ajax({
		  url: "https://brilliant-heat-5523.firebaseio.com/songs/" + songKey + "/.json",
		  method: "DELETE"
		}).done(function() {
		  console.log("Yay, it deleted!");
		  populate.getMeSomeData(songsIWant.songsIWantToAdd);
		});	
	});
});
define(["jquery", "lodash", "populate-songs", "songsIWant", "deleteSongs"],
function($, _, populate, songsIWant, deleteSongs) {


		// Delete buttons
$(document).on("click", ".delete", function() {
		console.log("delete button is working!!!!");
		// Removing selected item from DOM
		var songKey = $(this).prop('id');
		console.log("songKey", songKey);
		deleteSongs(songKey).then(function () {
			console.log("Delete!");
			// Showing Modal with success message
			$('#delete-success').modal('show');
			});
	});
});
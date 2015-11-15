 define(["jquery", "hbs", "hbs!../templates/songs", "populate-songs", "get-more-songs", "songs", "addSongs"], 
function($, Handlebars, songTemplate, populate, more, songsIWant, addSongs) {


	 // Click gets value on inputs, sends added data to firebase and calls function to write to DOM
	$("#add").click(function() {
		console.log("click");
		// Value of song name input
		var songName = $("#song-name").val();
		console.log(songName);
		// Value of artist name input
		var artistName = $("#artist-name").val();
		console.log(artistName);
		// Value of album name input
		var albumName = $("#album-name").val();
		console.log(albumName);
		// New song object
		var songObject = {
				
		      "title": songName,
		      "artist": artistName,
		      "album": albumName
		 	
		};
		console.log("songObject", songObject);
		// Sending added song to Firebase

		addSongs(songObject)
			.then(function(addedsong) {
	        //log first data
	        console.log("addedsong", addedsong);

	        //set type object to be first data
	        populate.getMeSomeData(songsIWant.songsIWantToAdd);
	        // Showing Modal with success message
	        $('#add-success').modal('show');
	    	})
	    	.fail(function(error) {	
	    		console.log("It errored out", error);
		
		});
	});
});






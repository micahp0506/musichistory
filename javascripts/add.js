 define(["jquery", "hbs", "hbs!../templates/songs", "populate-songs", "get-more-songs", "songs"], 
function($, Handlebars, songTemplate, populate, more, songsIwant) {


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
		$.ajax({
		    url: "https://brilliant-heat-5523.firebaseio.com/songs.json",
		  	method:"POST",
		  	data: JSON.stringify(songObject)
		  	}).done(function(addedSong) {
		  		// Function that writes to DOM
		  		populate.getMeSomeData(songsIwant.songsIWantToAdd);
		  	console.log("New Song", addedSong);
		  });
		
	});
});






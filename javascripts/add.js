 define(["jquery", "hbs", "hbs!../templates/songs", "populate-songs", "get-more-songs", "songs"], 
function($, Handlebars, songTemplate, populate, more, songsIwant) {


	 // Click sends songs to be added to the DOM
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
		  		populate.getMeSomeData(songsIwant.songsIWantToAdd);
		  	// console.log("New Song", addedSong);
		  });
		console.log("songObject", songObject);
		// // Checking for duplicate artists and albums
		// var seen = {};
		// $('p').each(function() {
		//     var txt = $(this).text();
		//     if (seen[txt])
		//         $(this).remove();
		//     else
		//         seen[txt] = true;
		// });
		// // Appending artist name to artist dropdown
		// $("#artist").append(artistName);
		// console.log(artistName);
		// // Appending album name to album dropdown
		// $("#album").append(albumName);
		// console.log(albumName);
	});
});






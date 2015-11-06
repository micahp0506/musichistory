define(["jquery", "hbs", "hbs!../templates/songs", "populate-songs", "get-more-songs", "songs"], 
function($, Handlebars, songTemplate, populate, more, songsIwant) {

// Fucntion to send intial songs request to DOM
populate.getMeSomeData(songsIwant.songsIWantToAdd);

// More button
$("body").click(function() {
	if (event.target.id === "more") {
		console.log('working');
		$("#song-display").append(more.getMeMoreData(songsIwant.songsIWantToAdd));	
	}
});
 
 // Click sends songs to be added to the DOM
$("#add").click(function() {
	var songName = $("#song-name").val();
	console.log(songName);
	var artistName = $("#artist-name").val();
	console.log(artistName);
	var albumName = $("#album-name").val();
	console.log(albumName);

	var songObject = {
	  "songs": [
	    {
	      "title": songName,
	      "artist": artistName,
	      "album": albumName
	    },
		]
	};

	$("#song-display").append(songTemplate(songObject));
	console.log(songTemplate(songObject));
	$("#artist").append(artistName);
	console.log(artistName);
	$("#album").append(albumName);
	console.log(albumName);
});

// Toggles the view for adding music
$("#add-music").click(function() {
	console.log("click");
	$("#add-song").toggle();
	console.log("toggle");
	$("#main-content").toggle();
});

// Toggles the list of music/main contet section
$("#list-music").click(function() {
	$("#main-content").toggle();
});

});

















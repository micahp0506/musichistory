define(["jquery", "hbs", "hbs!../templates/songs", "populate-songs", "get-more-songs", "songs"], 
function($, Handlebars, songTemplate, populate, more, songsIwant) {

// Creating "more" button
var moreButton = "<button id='more'>More</button>";

// More button functionality
$("body").click(function() {
	if (event.target.id === "more") {
		console.log('working');
		$("#more").remove();
		$("#song-display").append(more.getMeMoreData(songsIwant.songsIWantToAdd));	
	}
});

// Fucntion to send intial songs request to DOM
populate.getMeSomeData(songsIwant.songsIWantToAdd);

 
 // Click sends songs to be added to the DOM
$("#add").click(function() {
	// Value of song name input
	var songName = $("#song-name").val();
	console.log(songName);
	// Value of artist name input
	var artistName = $("#artist-name").val();
	console.log(artistName);
	// Value of album name input
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

	// Removing "more" button to have appendings above the button
	$("#more").remove();
	// // Appending song info(song title, artist name, and album name to DOM)
	$("#song-display").append(songTemplate(songObject));
	console.log(songTemplate(songObject));
	// Appending artist name to artist dropdown
	$("#artist").append(artistName);
	console.log(artistName);
	// Appending album name to album dropdown
	$("#album").append(albumName);
	console.log(albumName);
	// Appending "more" button
	$("#song-display").append(moreButton);
	console.log("more button is working!!");

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

















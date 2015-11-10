
define(["jquery", "populate-songs", "hbs!../templates/songs", "hbs!../templates/artist", "hbs!../templates/album"],
function($, populate, songTemplate, artistTemplate, albumTemplate) {

// Hiding add song section as default
$("#add-song").hide();

// Delete buttons
$("body").click(function() {
	if (event.target.id === "deletor") {
		console.log("delete button is working!!!!");
		// Removing selected item from DOM
		event.target.parentNode.remove();
		console.log(event.target.parentNode);
	}
});

// Filter by artist dropdown. Will show selected artist full song description(title, artist, album) in DOM
$("#artist").on("click", "li", function (event) {
	var artistVal = $(event.target).text();
    console.log("artistVal", artistVal);
	$(".songp").show();
	console.log("yep");
	$(event.target).parents().siblings(".button-artist").html(artistVal + '<span id="deletor" class="caret"></span>');
	console.log("yep2", $(event.target).parents().siblings());
	$(".songp").not(':contains("' + artistVal +'")').hide();
	console.log("yep3");
});

// Filter by album dropdown. Will show selected album full song description(title, artist, album) in DOM
$("#album").on("click", "li", function (event) {
	var albumVal = $(event.target).text();
    console.log("albumVal", albumVal);
	$(".songp").show();
	console.log("yep");
	$(event.target).parents().siblings(".button-artist").html(albumVal + '<span id="deletor" class="caret"></span>');
	console.log("yep2", $(event.target).parents().siblings());
	$(".songp").not(':contains("' + albumVal +'")').hide();
	console.log("yep3");
});

// Clearing filters button
$("#button").click(function(){
	console.log("click");
	$("#artist").siblings(".button-artist").html("Artists" + '<span id="deletor" class="caret"></span>');
	$("#album").siblings(".button-artist").html("Albums" + '<span id="deletor" class="caret"></span>');
	$(".songp").show();
});


// Declaring variables, possibly uneeded
var songs = [];
var newSongs = [];

// Returning to DOM songs to main content/artist to artist dropdown/album to album dropdown
	return {
		 songsIWantToAdd: function(songList) {
			console.log("songList", songList);
			// Appending song info(song title, artist name, and album name to DOM)
			$("#song-display").html(songTemplate(songList));
			// Appending artist name to artist dropdown
			$("#artist").html(artistTemplate(songList));
			console.log("artist", artistTemplate(songList));
			// Appending album name to album dropdown
			$("#album").html(albumTemplate(songList));
			console.log("album", albumTemplate(songList));
			}
		};
	
});





define(["jquery", "lodash", "populate-songs", "hbs!../templates/songs", "hbs!../templates/artist", "hbs!../templates/album", "duplicate"],
function($, _, populate, songTemplate, artistTemplate, albumTemplate, duplicate) {

 // Variable for removing items from firebase 
var ref;
var selectedArtist;
// Hiding add song section as default
$("#add-song").hide();

// Delete buttons
$("body").click(function() {
	if (event.target.id === "deletor") {
		console.log("delete button is working!!!!");
		// Removing selected item from DOM
		selectedArtist = event.target.parentNode;
		selectedArtist.remove();
		console.log(event.target.parentNode);
		// Removing selected from Firebase
		// ref = new Firebase("https://brilliant-heat-5523.firebaseio.com/");
		// ref.child(key).remove();
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

// Returning to DOM songs to main content/artist to artist dropdown/album to album dropdown
	return {

		 songsIWantToAdd: function(songList) {
			console.log("songList", songList);
			var arr = 
				$.map(songList.songs, function (e) {
					return e;
			});

			var uniqueArtist = duplicate.noArtistDuplicates(arr);
			var uniqueAlbum = duplicate.noAlbumDuplicates(arr);

			// Appending song info(song title, artist name, and album name to DOM)
			$("#song-display").html(songTemplate(songList));
			console.log("song-display", songTemplate(songList));
			// Appending artist name to artist dropdown
			$("#artist").html(artistTemplate(uniqueArtist));
			console.log("artist", artistTemplate(uniqueArtist));
			// Appending album name to album dropdown
			$("#album").html(albumTemplate(uniqueAlbum));
			console.log("album", albumTemplate(uniqueAlbum));
		
		}
	};
});













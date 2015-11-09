
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
		// var artistList = (event.target.parentNode);
		// console.log(artistList);
		// var artistListArray = artistList.split(" ");
		// console.log(artistListArray);
        // var albumList = $("#album").val();
        // console.log(albumList);

         // for (var i = 0; i < artistList.length; i++) {
         //     console.log(artistList[i].innerHTML);
         //     if (artistList[i].innerHTML === artist.innerHTML) {
         //         artistList[i].remove();
         //         albumList[i].remove();
         //     }
         //  }
		// $("#artist").remove(event.target.parentNode);
	}
});

// Declaring variables, possibly uneeded
var songs = [];
var newSongs = [];

// Returning to DOM songs to main content/artist to artist dropdown/album to album dropdown
	return {
		 songsIWantToAdd: function(songList) {
			console.log("songList", songList);
			// Appending song info(song title, artist name, and album name to DOM)
			$("#song-display").append(songTemplate(songList));
			// Appending artist name to artist dropdown
			$("#artist").append(artistTemplate(songList));
			console.log(artistTemplate(songList));
			// Appending album name to album dropdown
			$("#album").append(albumTemplate(songList));
			console.log(albumTemplate(songList));
			}
		};
	});

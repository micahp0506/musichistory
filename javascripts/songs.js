
define(["jquery", "populate-songs", "hbs!../templates/songs", "hbs!../templates/artist", "hbs!../templates/album"],
function($, populate, songTemplate, artistTemplate, albumTemplate) {

// Hiding add song section as default
$("#add-song").hide();

// Delete buttons
$("body").click(function() {
	if (event.target.id === "deletor") {
		console.log("delete button is working!!!!");
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
			$("#song-display").append(songTemplate(songList));
			$("#artist").append(artistTemplate(songList));
			console.log(artistTemplate(songList));
			$("#album").append(albumTemplate(songList));
			console.log(albumTemplate(songList));
			}
		};
	});

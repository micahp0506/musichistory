
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

// Getting the value of checked option in artist dropdown

$("#artist").on("click", "li", function (event) {
	var artistVal = $(event.target).text();
    console.log("artistVal", artistVal);
	$(".songp").show();
	console.log("yep");
	$(event.target).parents().siblings(".button-artist").html(artistVal + '<span class="caret"></span>');
	console.log("yep2", $(event.target).parents().siblings());
	$(".songp").not(':contains("' + artistVal +'")').hide();
	console.log("yep3");
});





// $("#artist").click(function(){
//     var artistVal = $(event.target).text();
//     console.log("artistVal", artistVal);




//     	// for (var i = 0; i < songObject.length; i++);
//     	// 	console.log("songObject2", songObject[i]); 	
// });


// Getting the value of checked option in artist dropdown
$("#album").click(function(){
    var albumVal = $(event.target).text();
    console.log("albumVal", albumVal);
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
			console.log("artist", artistTemplate(songList));
			// Appending album name to album dropdown
			$("#album").append(albumTemplate(songList));
			console.log("album", albumTemplate(songList));
			}
		};
	


});




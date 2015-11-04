define(["jquery", "populate-songs", "get-more-songs"], 
function($, populate, more) {


$("#add-song").hide();
var songs = [];
var newSongs = [];

function songsIWantToAdd(songList) {
	for (var i =0; i < songList.songs.length; i++) {
		console.log(songList.songs[i]);
		$("#artist").append("<option>" + songList.songs[i].artist + "</option>");
		$("#album").append("<option>" + songList.songs[i].album + "</option>");
		newSongs[i] = "<p>" + songList.songs[i].title + 
			" by " + songList.songs[i].artist + 
			" on the album " + songList.songs[i].album + 
			"<button class='delete' text='Delete'>Delete</button>" + "</p>";
		$("#song-display").append(newSongs[i]);
		console.log(newSongs[i]);
	}
	var moreButton = "<button id='more'>More</button>";
	$("#song-display").append(moreButton);
	$(".delete").click(function() {
		console.log("working!!!!");
  		$(this).parent().remove();
	});
}
populate.getMeSomeData(songsIWantToAdd);

$("body").click(function() {
	if (event.target.id === "more") {
		console.log('working');
		more.getMeMoreData(songsIWantToAdd);
	}
});
 
$("#add").click(function() {
	var songName = $("#song-name").val();
	console.log(songName);
	var artistName = $("#artist-name").val();
	console.log(artistName);
	var albumName = $("#album-name").val();
	console.log(albumName);
	newSongs = "<p>" + songName + 
		" by " + artistName + 
		" on the album " + albumName + "<button class='delete' text'delete'>Delete</button>" + "</p>";
	console.log(newSongs);
	$("#song-display").append(newSongs);
	$("#artist").append("<option>" + artistName + "</option>");
	$("#album").append("<option>" + albumName + "</option>");
	$(".delete").click(function() {
		console.log("working!!!!");
  		$(this).parent().remove();
	});

});

$("#add-music").click(function() {
	console.log("click");
	$("#add-song").toggle();
	console.log("toggle");
	$("#main-content").toggle();
});

$("#list-music").click(function() {
	$("#main-content").toggle();
});


});

















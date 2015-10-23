$(document).ready(function() { 


var songs = [];
var newSongs = [];

function songsIWantToAdd(songList) {
	for (var i =0; i < songList.songs.length; i++) {
		console.log(songList.songs[i]);
		$("#artist").append("<option>" + songList.songs[i].artist + "</option>");
		$("#album").append("<option>" + songList.songs[i].album + "</option>");
		newSongs[i] = "<p>" + songList.songs[i].title + 
			" by " + songList.songs[i].artist + 
			" on the album " + songList.songs[i].album + "</p>";
		$("#song-display").append(newSongs[i]);	
		console.log(newSongs[i]);
	}
}

$.ajax({
	url: "songs.json"
}).done(function(songsObject) {
	console.log(songsObject);
	songsIWantToAdd(songsObject);
	
});

// Events
$("#add").click(function(){
	var songName = $("#song-name").val();
	console.log(songName);
	var artistName = $("#artist-name").val();
	console.log(artistName);
	var albumName = $("#album-name").val();
	console.log(albumName);
	newSongs = "<p>" + songName + 
		" by " + artistName + 
		" on the album " + albumName + "</p>";
	console.log(newSongs);
	$("#song-display").append(newSongs);
	$("#artist").append("<option>" + artistName + "</option>");
	$("#album").append("<option>" + albumName + "</option>");

});

$("#add-music").click(function() {
	$("#add-song").toggle();
	$("#main-content").toggle();
});

$("#list-music").click(function() {
	$("#main-content").toggle();
});




});















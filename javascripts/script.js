define(["jquery", "populate-songs", "get-more-songs", "songs"], 
function($, populate, more, songsIwant) {


populate.getMeSomeData(songsIwant.songsIWantToAdd);

$("body").click(function() {
	if (event.target.id === "more") {
		console.log('working');
		$("#more").remove();
		more.getMeMoreData(songsIwant.songsIWantToAdd);
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
		" on the album " + albumName + "<button class='delete' text'delete'>X</button>" + "</p>";
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

















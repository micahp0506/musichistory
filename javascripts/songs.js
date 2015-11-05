
define(["jquery", "populate-songs"],
function($, populate) {


$("#add-song").hide();
var songs = [];
var newSongs = [];

return {
	 songsIWantToAdd: function(songList) {
		console.log("songList", songList);
		console.log("newSongsArray", newSongs);
		newSongs = [];
		for (var i =0; i < songList.songs.length; i++) {
			console.log(songList.songs[i]);
			$("#artist").append("<option>" + songList.songs[i].artist + "</option>");
			$("#album").append("<option>" + songList.songs[i].album + "</option>");
			newSongs[i] = "<p>" + songList.songs[i].title + 
				" by " + songList.songs[i].artist + 
				" on the album " + songList.songs[i].album + 
				"   <button class='delete' text='Delete'>X</button>" + "</p>";
			$(".delete").addClass(".delete");
			$("#song-display").append(newSongs[i]);
			console.log(newSongs[i]);
		}
		var moreButton = "<button id='more'>More</button>";
		$("#song-display").append(moreButton);
			console.log("more button is working!!");
		$(".delete").click(function() {
			console.log("delete button is working!!!!");
	  		$(this).parent().remove();
		});
}
};
});
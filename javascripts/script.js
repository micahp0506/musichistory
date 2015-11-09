define(["jquery", "hbs", "hbs!../templates/songs", "populate-songs", "get-more-songs", "songs"], 
function($, Handlebars, songTemplate, populate, more, songsIwant) {


// Fucntion to send intial songs request to DOM
populate.getMeSomeData(songsIwant.songsIWantToAdd);

 


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

















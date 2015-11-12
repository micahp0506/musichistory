define(["jquery", "hbs", "hbs!../templates/songs", "populate-songs", "get-more-songs", "songsIWant", "duplicate","hbs!../templates/artist", "hbs!../templates/album"], 
function($, Handlebars, songTemplate, populate, more, songsIWant, duplicate, artistTemplate, albumTemplate) {


// Fucntion to send intial songs request to DOM
	// populate.getMeSomeData(songsIWant.songsIWantToAdd);

	// Create a reference to your Firebase database
	var myFirebaseRef = new Firebase("https://brilliant-heat-5523.firebaseio.com");

	// Listen for when anything changes on the "songs" key
	myFirebaseRef.child("songs").on("value", function(snapshot) {

		// Store the entire songs key in a local variable
  		var allSongsObject = snapshot.val();

  			// Bind the allSongsObject to the song list Handlebar template &
  			// Appending song info(song title, artist name, and album name to DOM)
			$("#song-display").html(songTemplate({songs:allSongsObject}));
			console.log("song-display", songTemplate({songs:allSongsObject}));

			// Bind the unique artists & album to the artists & album template
			console.log("allSongsObject",allSongsObject);
			var arr = 
				$.map(allSongsObject, function (e) {
					return e;
			});
				console.log("arr", arr);
			// Looking for duplicate artists 
			var uniqueArtist = duplicate.noArtistDuplicates(arr);
			console.log("uniqueArtist", uniqueArtist);
			// Looking for duplicate albums
			var uniqueAlbum = duplicate.noAlbumDuplicates(arr);
			console.log("uniqueAlbum", uniqueAlbum);
			// Appending artist name to artist dropdown
			$("#artist").html(artistTemplate(uniqueArtist));
			console.log("artist", artistTemplate(uniqueArtist));
			// Appending album name to album dropdown
			$("#album").html(albumTemplate(uniqueAlbum));
			console.log("album", albumTemplate(uniqueAlbum));


	});



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

















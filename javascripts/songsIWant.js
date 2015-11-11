
define(["jquery", "lodash", "hbs!../templates/songs", "hbs!../templates/artist", "hbs!../templates/album", "duplicate"],
function($, _, songTemplate, artistTemplate, albumTemplate, duplicate) {




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
			console.log("uniqueArtist", uniqueArtist);
			$("#artist").html(artistTemplate(uniqueArtist));
			console.log("artist", artistTemplate(uniqueArtist));
			// Appending album name to album dropdown
			console.log("uniqueAlbum", uniqueAlbum);
			$("#album").html(albumTemplate(uniqueAlbum));
			console.log("album", albumTemplate(uniqueAlbum));
		
		}
	};
});	
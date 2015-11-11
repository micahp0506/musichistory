define(["jquery", "hbs", "lodash"], 
function($, Handlebars, _) {


	return {

		noArtistDuplicates: function(arr) {
			
			var artistname = 
			    _.chain(arr).uniq('artist').pluck('artist').value();
			    console.log("artistname", artistname);
			return artistname;    
		},

		noAlbumDuplicates: function(arr) {
			
			var albumname = 
			    _.chain(arr).uniq('album').pluck('album').value();
			    console.log("albumname", albumname);
			return albumname;    
		}

	};
});
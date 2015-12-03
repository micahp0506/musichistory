app.factory("songstorage", 
["$q", "$http",
function($q, $http) {

  var song_list;

  function loadSongs () {
    return $q(function(resolve, reject) {
        $http.get('./data/songs.json')
        .success(
          function(objectFromJSONFile) {
            console.log("loadSongs", objectFromJSONFile);
            /* 
            Convert Firebase's object of objects into an array of objects, and store it in the private variable
            */
            song_list = Object.keys(objectFromJSONFile.songs).map(song => objectFromJSONFile.songs[song]);
            resolve(song_list);
          }, function(error) {
            reject(error);
          }
        );
      }); 
  }


  // Store the promise as a private variable
  var songPromise = loadSongs();
  return {
    loadSongs: function () {
      return songPromise;
    },
    getSongs: function() {
      console.log("Factory returning all songs");
      return song_list;
      console.log("song_list", song_list);
    },
    getSong: function(name) {
      console.log("Factory returning single song");
      return song_list.filter(function(song){
        return song.name === name;
      })[0];
    },
    addSong: function(song) {
      console.log("Added single song to factory");
      song_list.push(song);
      return song_list;
    }
  }
}]);
define(["jquery"], function($) {
  return {
    getMeSomeData: function(passFunc) {
      $.ajax({url: "data/songs.json"}).done(function(songsObject) {
      	passFunc(songsObject)
      })
    }
  };
});
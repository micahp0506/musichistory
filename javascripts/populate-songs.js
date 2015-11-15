// populate-songs/loading populate(first) JSON file

define(["jquery"], function($) {
  return {
    getMeSomeData: function(passFunc) {
      $.ajax({url: "https://brilliant-heat-5523.firebaseio.com/.json"}).done(function(songsObject) {
      	passFunc(songsObject);
      });
    }
  };
});


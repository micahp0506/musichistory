// get-more-songs/loading more(second) JSON file

define(["jquery"], function($) {
  return {
    getMeMoreData: function(passFunc) {
      $.ajax({url: "data/songs2.json"}).done(function(songs2Object) {
        passFunc(songs2Object);
      });
    }
  };
});
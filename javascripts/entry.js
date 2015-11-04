requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  }
});


require(["jquery", "script", "populate-songs", "get-more-songs"], 
function($, script, populate, more) {

  // Get the first list of songs (passing a callback function reference)
  // first.getMeSomeData(function(gimmeBackTheData) {
  //   console.log("gimmeBackTheData", gimmeBackTheData);
  // });

  // second.getMeMoreData(function(gimmeBackTheData) {
  //   console.log("gimmeBackTheData", gimmeBackTheData);
  // });

}); 
	
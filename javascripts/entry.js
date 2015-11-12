
// Requirejs configuration

requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase"
  },

  shim: {
  	"bootstrap": ["jquery"]
  },
    "firebase": {
    exports: "Firebase"
    } 
});


require(["bootstrap", "script", "add", "delete"], 
function(b, script, add, deletes) {
}); 
	
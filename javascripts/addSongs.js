 define(["jquery", "q"], 
 function($, Q){

 	return function(songObject){

 			//set deffered object
		 	 var deferred = Q.defer();
		 	 //make ajax call
			 $.ajax({
			 	url: "https://brilliant-heat-5523.firebaseio.com/songs.json",
		  		method:"POST",
		  		data: JSON.stringify(songObject)
		  		// XHR was successful
			 }).done(function(addedSong){

			 	//resolve promise
			 	deferred.resolve(addedSong);

			 })
			 	// XHR failed
			 .fail(function(xhr, status, error) {
			 	// Since the call failed, we have to reject the promise
      			deferred.reject(error);
      			$("#add-failure").modal('show');


			 });
			 //return promise state
			 return deferred.promise;
			 
	 	};
 });
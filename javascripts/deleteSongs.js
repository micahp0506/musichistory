 define(["jquery", "q"], 
 function($, Q){

 	return function(deleteThisSong){

 			//set deffered object
		 	 var deferred = Q.defer();
		 	//make ajax call
			 $.ajax({
			 	url: "https://brilliant-heat-5523.firebaseio.com/songs/" + deleteThisSong + "/.json",
		  		method:"DELETE",
		  		data: JSON.stringify(deleteThisSong)
		  		// XHR was successful
			 }).done(function(data){

			 	//resolve promise
			 	deferred.resolve(data);

			 })
			 	// XHR failed
			 .fail(function(xhr, status, error) {
			 	// Since the call failed, we have to reject the promise
      			deferred.reject(error);
      			$("#delete-failure").modal('show');


			 });
			 //return promise state
			 return deferred.promise;
			 
	 	};
 });
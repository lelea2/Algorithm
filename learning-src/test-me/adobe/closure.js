
for (var i = 0; i < 3; i++) {
	//(function(i) {
	  setTimeout(function(i) {
	    console.log(i); 
	  }.bind(undefined, i));
	//}(i));
}
var theCanvas = document.getElementById("Canvas1");

		//setup our context
		var ctx = theCanvas.getContext("2d");
		
		//Draw text in our canvas
		ctx.font = "25pt Georgia";
		ctx.fillText ("Canvas is supported", 20, 60);

//There is a warning Modernizr.load use <img> to pre-load resources

Modernizr.load ({
		text: Modernizr.canvas2, 
		yep:"js/success.js",
		nope:"includes/webshim/minified/polyfiller.js",
		complete:function() {
			//This function will run after the JS is loadded based on either case.
			
			console.log("The test is complete");
			
			if(!Modernizr.canvas){
				//If canvas is not supported, run this code.
				Modernizr.load("js/fail.js");
	
				
				
			}
			
		}
		
	});


/*
if(Modernizr.canvas){
		//Canvas is supported
		//Code goes here to draw on the canvas
		
		var theCanvas = document.getElementById("Canvas1");
		//setup our context
		var ctx = theCanvas.getContext("2d");
		
		//Draw text in our canvas
		ctx.font = "25pt Georgia";
		ctx.fillText ("Canvas is supported", 20, 60);
		
}else{
	//Canvas is not supported
	//Polyfill would go here
	
}


console.log(Modernizr);
*/



var theCanvas = document.getElementById("Canvas1");

		//setup our context
		var ctx = theCanvas.getContext("2d");
		
		//Draw text in our canvas
		ctx.font = "25pt Georgia";
		ctx.fillText ("Canvas is supported", 20, 60);
// JavaScript Document


$(document).ready(function() {
   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
       
	var target = $(this).attr("href"); //Get the target
			
	// perform animated scrolling by getting top-position of target-element and set it as scroll target
	$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
	     location.hash = target;  //attach the hash (#jumptarget) to the pageurl
	});
			
	return false;
   });
});


//Hide JS
$(document).ready(function(){
    $("button").click(function(){
        $("#hidethis").toggle();
    });
});


$(document).ready(function(){
    $("button").click(function(){
        $("#hidethis2").toggle();
    });
});


//modernizr
var theCanvas = document.getElementById("Canvas1");

		//setup our context
		var ctx = theCanvas.getContext("2d");
		
		//Draw text in our canvas
		ctx.font = "25pt Georgia";
		ctx.fillText ("Canvas is supported", 0,0);

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

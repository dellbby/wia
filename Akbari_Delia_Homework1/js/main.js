/*
     Name: Delia Akbari
     Date: April 1, 2015
     Class & Section:
     Comments: 
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

x Draw a rectangle starting at point (0 ,0)
x That has a width of 50 px and a heigh of 100px
x Set the color of the rectangle to a shade of blue.
x Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function(){
	if(Modernizr.canvas){
		var theCanvas1 = document.getElementById("rectangle");
		var ctx = theCanvas1.getContext("2d");

		ctx.strokeStyle = "black";
			ctx.fillStyle = "skyblue";
			ctx.lineWidth = 5;

			//x,y,width,height
			ctx.strokeRect(0,0,50,100);
			ctx.fillRect(0,0,50,100);
	}else{
		//canvas is not supported
	}



/*******************************************
PART 2

x Draw a circle starting at point (50 ,50)
x That has a radius of 20 px 
x Set the color of the circle to a shade of red and set the alpha to .5
x Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here 

	if(Modernizr.canvas){
		var circle = document.getElementById("circle");
		var ctx = circle.getContext("2d");
		ctx.fillStyle = "red";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.arc(50,50,20,0,2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}else{
		//canvas is not supported
	}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	var star = document.getElementById("star");
	var ctx3 = star.getContext('2d');

	var length = 20;

	ctx3.beginPath();
	ctx3.translate(100, 100);
	ctx3.rotate((Math.PI * 1 / 10));
	

	for (var i = 5; i--;) {
	    ctx3.lineTo(0, length);
	    ctx3.translate(0, length);
	    ctx3.rotate((Math.PI * 2 / 10));
	    ctx3.lineTo(0, -length);
	    ctx3.translate(0, -length);
	    ctx3.rotate(-(Math.PI * 6 / 10));
	};
		
		ctx3.lineTo(0, length);
		ctx3.closePath();
		ctx3.strokeStyle = 'hotpink';
		ctx3.fillStyle = "black";
		ctx3.stroke();




/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

var umbrella = document.getElementById('umbrella');
		if (umbrella && umbrella.getContext) {
			var ctx4 = umbrella.getContext("2d");
			if(ctx4){
				ctx4.strokeStyle = "black";
				ctx4.fillStyle = "blue";
			
				ctx4.beginPath();
				ctx4.moveTo(20, 150);
				ctx4.bezierCurveTo(75, 0, 155, 35, 180, 150);
				ctx4.stroke();
			
				ctx4.beginPath();
				ctx4.moveTo(20, 150);
				ctx4.bezierCurveTo(40, 120, 55, 120, 60, 150);
				ctx4.stroke();
			
				ctx4.beginPath();
				ctx4.moveTo(60, 150);
				ctx4.bezierCurveTo(80, 120, 95, 120, 100, 150);
				ctx4.stroke();
			
				ctx4.beginPath();
				ctx4.moveTo(100, 150);
				ctx4.bezierCurveTo(120, 120, 135, 120, 140, 150);
				ctx4.stroke();
			
				ctx4.beginPath();
				ctx4.moveTo(140, 150);
				ctx4.bezierCurveTo(160, 120, 165, 120, 180, 150);
				ctx4.stroke();
			
			}
		}



/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

	if(Modernizr.canvas){
		var text = document.getElementById("number5");
		var ctx = text.getContext("2d");
		var textString = "Hi there!";
		ctx.font = "60pt Century Gothic";
		ctx.fillStyle = "white";
		ctx.strokeStyle = "hotpink"
		ctx.fillText(textString, 10, 60);
		ctx.strokeText(textString, 10, 60);
	}else{
		//canvas is not supported!
	}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	if(Modernizr.canvas){
		var image = document.getElementById("canvas6");
		var ctx = image.getContext("2d");
		var imageSrc = document.getElementById("logo");

		
		ctx.drawImage(imageSrc,0,0);

		ctx.drawImage(imageSrc,0,970,1500,500);

		ctx.drawImage(imageSrc,1620,150,3000,310,50,1700,1800,200);
	}else{
		//canvas is not supported
	}



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	if(Modernizr.canvas){
		var circle = document.getElementById("canvas7");
 	 if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke(); }
}
}
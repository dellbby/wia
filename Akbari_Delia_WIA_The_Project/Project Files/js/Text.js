window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	var sentence = new createjs.Text();
	
	sentence.text = "Tel:1-323-400-6599 ";
	sentence.font = "bold 20px century gothic";
	sentence.color= "#234545";
	sentence.x = 50;
	sentence.y = 50;
	sentence.textAlign = "left";
	sentence.lineWidth = 200;
	sentence.lineHeight = 40;
	sentence.outline = false;
	
	
	var sentence2 = new createjs.Text("Email:linda@lqasabiantherapy.com", "bold 30px century gothic", "black");
	
	stage.addChild(sentence2);
	
	stage.addChild(sentence);
	stage.update();
	
}
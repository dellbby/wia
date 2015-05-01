$(function() { 
	
		//Add a click function to our button
		$("#hide").click(function(){
				$("#paragraphs").hide(2000);
			
			
			});
			
		$("#show").click(function(){
			
				$("#paragraphs").show(2000, function(){
					
						$("#paragraphs").css("background-color", "red");
					
					});
			
			});	
			
		$("#toggle").click(function(){
				
				$("#paragraphs").toggle("slow");
			
			});	

});



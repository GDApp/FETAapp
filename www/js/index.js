$(document).ready(function() {
 $(".content").anim({translate3d: '100%,0,0'}, 0);
 $(".button").click(function(){ 
	hrefPage = ("odnosniki/" + $(this).data('href') + ".html");
	hrefScipt = ("js/" + $(this).data('href') + ".js");
	$(".inside").load(hrefPage, function(){
		$("#wrap").anim({translate3d: '-100%,0,0'}, 0.5, 'ease-in', function(){
			$.getScript(hrefScipt);
			
	    });	
	});
});
});

					
			
	
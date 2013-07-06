$(".menubutton").click(function(){
	$("#wrap").anim({translate3d: '0,0,0'}, 0.5, 'ease-in', function(){
	alert("done");
	});
});
var n=0;
 $(".wroc").click(function(){ 
 	if(n>0)
 	{
	n--;
 	zdj = ("res/" + n + ".png");
 	$(".zdjecia").attr("src", zdj)
 	}
 	else
 	{n=9;
 	zdj = ("res/" + n + ".png");
 	$(".zdjecia").attr("src", zdj)
 	}

});
  $(".dalej").click(function(){ 
  	
	if(n<9)
 	{
	n++;
	zdj = ("res/" + n + ".png");
 	$(".zdjecia").attr("src", zdj)
 	}
 	else
 	{n=0;
 	zdj = ("res/" + n + ".png");
 	$(".zdjecia").attr("src", zdj)
 	}
});
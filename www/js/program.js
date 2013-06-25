$(".menubutton").click(function(){
	$("#wrap").anim({translate3d: '0,0,0'}, 0.5, 'ease-in', function(){
	alert("done");
	});
});
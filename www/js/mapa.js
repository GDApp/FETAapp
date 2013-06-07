$("#onMap").click(function(){
	$(".front").empty();
	$('<iframe id="canvmapa" src="mapa.html">').appendTo('.front');
});

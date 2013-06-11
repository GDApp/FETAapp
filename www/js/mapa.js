$("#onMap").click(function(){
	$(".front").empty();
	$('<iframe id="canvmapa" src="res/data/mapa.html">').appendTo('.front');
});

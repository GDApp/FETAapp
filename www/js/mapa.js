$("#onMap").click(function(){

if ($animDir == 1) {
	$("#content1").empty();
	$('<iframe id="canvmapa" src="mapa.html">').appendTo('#content1');
}
else {
	$("#content2").empty();
	$('<iframe id="canvmapa" src="mapa.html">').appendTo('#content2');
}

});

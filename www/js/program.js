var currentSC = "";
var previousSC = "czwartek";
var teatr = ""
$("#tabela").load("repertuar/czwartek.html");
//$("#tabela").fadeIn();
$("#tabela").delegate("tr", "click", function() {
	$("span").removeClass("wybranyDzien");
	previousSC = "";
	teatr = ("oteatrach.html "+ "#" + $(this).data('teatr'));
	//$("#tabela").fadeOut(300, function(){
		$("#tabela").load(teatr);//, function(){
	//		$("#tabela").fadeIn(400);
	//	});
	//});
});

$("span").click(function(){
	currentSC = $(this).attr('id');
	if (currentSC == previousSC) {} 
	else {
	var dzien = $(this);
	$("span").removeClass("wybranyDzien");
	$(dzien).addClass("wybranyDzien");
	previousSC = $(this).attr('id');
	$('#topbar').text($(this).data('kiedy'));
	//$("#tabela").fadeOut(300, function(){
	$("#tabela").load("repertuar/" + $(dzien).attr('id') + ".html");// function(){
	//$("#tabela").fadeIn(600);

	//});
	//});
	}
});


//	
//	$("#tabela").fadeIn("slow");
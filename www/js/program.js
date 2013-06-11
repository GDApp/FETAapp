var currentSC = "";
var previousSC = "czwartek";
var teatr = ""

$("#tabela").delegate("tr", "click", function() {
	$("span").removeClass("wybranyDzien");
	previousSC = "";
	teatr = ("res/data/oteatrach.html "+ "#" + $(this).data('teatr'));
	$("#tabela").fadeOut(300, function(){
		$("#tabela").load(teatr, function(){
			$("#tabela").fadeIn(400);
		});
	});
});
$("#tabela").delegate(".imgTeatry", "click", function() {
	$('body').append("<div class='pic'><img src=" + $(this).attr("src") + " class=" + "'insidepic'" + "></div>");

});
	$("body").delegate(".pic", "click", function() {
	$(".pic").remove();
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
	$("#tabela").fadeOut(300, function(){
	$("#tabela").load("res/data/repertuar/" + $(dzien).attr('id') + ".html", function(){
	$("#tabela").fadeIn(600);

	});
	});
	}
});


//	
//	$("#tabela").fadeIn("slow");
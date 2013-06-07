
$("#tabela").load("repertuar/czwartek.html");
$("#tabela").fadeIn();

$("span").click(function(){
	var dzien = $(this);
	$('#topbar').text($(this).data('kiedy'));
	$("span").removeClass("wybranyDzien");
	dzien.addClass("wybranyDzien");
	$("#tabela").fadeOut(300, function(){
	$("#tabela").load("repertuar/" + $(dzien).attr('id') + ".html", function(){
	$("#tabela").fadeIn(600);

	});
	});


		});

//	
//	$("#tabela").fadeIn("slow");
$(document).ready(function() {
//Zmienne
var animation = false;
var className = $(document.documentElement).attr('class');
$currentId = "";
$prevId = "";
var hrefPage = ("start.html");
$animDir = 1;
var front = "";
var back = "";
var title = ""

var hrefScipt = "";
$("#content1").load(hrefPage);
//Test na wsparcie 3D
  if (className.toLowerCase().indexOf("jest3d") >= 0) {
		$(".guzik").addClass("anim");}
		else {$(".guzik").addClass("anim");}


		
// Wczytywanie stron (z 3D)
$(".anim").click(function(){
	$('#topbar').text($(this).data('tyt'));
	$currentId = $(this).attr('id');
	hrefPage = ($(this).data('href'));
	hrefScipt = ("js/" + $(this).data('js'));
	front = $(".front");
	back = $(".back");
	

	if ($currentId == $prevId) {} 
	else {
		$prevId = $(this).attr('id');
		$(".guzik").css("background", "black");
		$(this).css("background", "#3D4450");
		$(".guzik").removeClass("clicked");
		
		$(this).addClass("clicked");
		$(back).load(hrefPage, function(){
			$(front).anim({translate3d: '100%,0,0'}, 0.3, 'ease-in', function(){
				$(front).empty();
				$(front).css('z-index', 0);
				$(back).css('z-index', 1);
				$(front).anim({translate3d: '0,0,0'}, 0, 'none', function(){
					$(front).removeClass("front");
					$(front).addClass("back");
					$(back).removeClass("back");
					$(back).addClass("front");
					$.getScript(hrefScipt);
				});
			});
		});

	}
				
	});
// Wczytywanie stron (bez 3D)
$(".nonanim").click(function(){
	var title = $(this).text();
	
	$currentId = $(this).attr('id');
	hrefPage = ("content.html #" + $(this).data('href'));
	  if ($currentId == $prevId) {} 
	  else {
	  	$('#topbar').text(title);
		prevId = $(this).attr('id');
		$("#content1").load(href);
	  }
})

// Koniec
});


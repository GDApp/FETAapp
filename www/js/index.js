$(document).ready(function() {
//Zmienne
var animation = false;
var className = $(document.documentElement).attr('class');
$currentId = "";
$prevId = "";
var hrefPage = ("content.html #start");
$animDir = 1;
var title = "Feta"
$('#topbar').text(title);

var hrefScipt = "";
$("#content1").load(hrefPage);
$("#content2").load("content.html #start");
//Test na wsparcie 3D
  if (className.toLowerCase().indexOf("jest3d") >= 0) {
		$(".guzik").addClass("anim");}
		else {$(".guzik").addClass("nonanim");}
		
// Wczytywanie stron (z 3D)
$(".anim").click(function(){
	$currentId = $(this).attr('id');
	hrefPage = ("content.html #" + $(this).data('href'));
	hrefScipt = ("js/" + $(this).data('href') + ".js");
	guzik = $(this);

	  if ($currentId == $prevId) {} 
	else {
	  if ($animDir == 1) {
	  	var title = $(this).text();
		$('#topbar').text(title);
		$prevId = $(this).attr('id');
		$("#content2").load(hrefPage, function(){
		 $("#content1").anim({translate3d: '100%,0,0'}, 0.3, 'ease-in', function(){
		  $("#content1").empty();
		  $("#content1").css('z-index', 0);
		  $("#content2").css('z-index', 1);
		   $("#content1").anim({translate3d: '0,0,0'}, 0, 'none', function(){
		   	$('#topbar').text(title);
		   $.getScript(hrefScipt);
		   $animDir = 0;
		   });
		 });
		});}

	  else{	
	  	var title = $(this).text();
		 $('#topbar').text(title);
		$prevId = $(this).attr('id');
		$("#content1").load(hrefPage, function(){
		  $("#content2").anim({translate3d: '-100%,0,0'}, 0.3, 'ease-in', function(){
		   $("#content2").empty();
		   $("#content2").css('z-index', 0);
		   $("#content1").css('z-index', 1);
		   $("#content2").anim({translate3d: '0,0,0'}, 0, 'none', function(){
		   	$('#topbar').text(title);
		   	$.getScript(hrefScipt);
		   $animDir = 1;
		   });
		});
	  });}
				
	}
});
// Wczytywanie stron (bez 3D)
$(".nonanim").click(function(){
	var title = $(this).text();
	
	$currentId = $(this).attr('id');
	hrefPage = ("content.html #" + $(this).data('href'));
	guzik = $(this);
	  if ($currentId == $prevId) {} 
	  else {
	  	$('#topbar').text(title);
		prevId = $(this).attr('id');
		$("#content1").load(href);
	  }
})

// Koniec
});


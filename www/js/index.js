$(document).ready(function() {
	window.addEventListener('load', function() {
    	FastClick.attach(document.body);
	}, false);
var className = $(document.documentElement).attr('class');
var currentId = "";
var prevId = "Sta";
var hrefPage = ("res/data/start.html");
var front = "";
var back = "";
var title = ""
var hrefScipt = "";
$(".front").load(hrefPage);		
$(".guzik").click(function(){
	$('#topbar').text($(this).data('tyt'));
	currentId = $(this).attr('id');
	hrefPage = ("res/data/" + $(this).data('href'));
	hrefScipt = ("js/" + $(this).data('js'));
	front = $(".front");
	back = $(".back");
	if (currentId == prevId) {} 
	else {
		prevId = $(this).attr('id');
		$(".guzik").removeClass("clicked");
		$(this).addClass("clicked");
		$(back).load(hrefPage, function(){
			$(front).anim({translate3d: '100%,0,0'}, 0.5, 'ease-in', function(){
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
});


$(".imgTeatry").click(function(){
$('body').append("<div class='pic'><img src=" + $(this).attr("src") + " class=" + "'insidepic'" + "></div>");
});
$("body").delegate(".pic", "click", function() {
$(".pic").remove();
});
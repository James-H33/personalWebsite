var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");

$("body").append($overlay);
$overlay.append($image);


$("img").on("click", function() {
  var $imgSrc = $(this).attr("src");
  $image.attr("src", $imgSrc);
  $overlay.fadeIn();
});

$overlay.click(function() {
  $(this).fadeOut();
});

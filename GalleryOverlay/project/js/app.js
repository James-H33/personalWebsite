//Problem: Clicking on images redirects to seperate page with the image
// Solution: Create a lightbox


// variable for overlay
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

// Add Overlay
$("body").append($overlay);

  // Adds image to overlay
$overlay.append($image);

// adds caption to overlay
$overlay.append($caption);

// 1. Capture image event
$("#imageGallery a").click(function(event) {
 event.preventDefault();
 var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function() {
  $(this).hide();
});

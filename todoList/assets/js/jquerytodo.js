//jQuery

// $("li").on("click", function() {
//
//   if($(this).css("color")  === "rgb(128, 128, 128)") {
//       $(this).css({
//         color: "rgb(0, 0, 0)",
//         textDecoration: "none"
//       });
//
//   } else {
//     $(this).css({
//     color: "gray",
//     textDecoration: "line-through"
//   });
// }
// });

// Above is all replaced by(kinda)...
// Adds class to ul
$("ul").on("click", "li",function() {
$(this).toggleClass("completed");
});

//Click "X" to remmove the parent element...
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(function() {
    $(this).remove();
  });
  // Stops the function from acting on elements outside the designated element...
  event.stopPropagation;
});

// Event Listener for input text box...
$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    var todoText = $(this).val();
    $("ul").append("<li>" + "<span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    $(this).val("");
  }
  event.stopPropagation;
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});

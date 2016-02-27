var button = document.querySelector("button");
var navbarAddColor = document.querySelector(".collapse.navbar-collapse, .navbar.navbar-inverse.navbar-fixed-top");


button.addEventListener("click", function() {
  console.log("button clicked");
  navbarAddColor.classList.toggle("backgroundColor");

});

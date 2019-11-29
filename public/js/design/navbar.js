console.log("/js/design/navbar.js\nThis file controls the behavior of the header.");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {navBar();};

// Get the header
var header = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
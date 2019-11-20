// VALIDATION
console.log("signup-modal.js loaded");

// ----------------------
//  VARIABLE DECLARATION
// ----------------------
var modal = document.getElementById("sign-up-modal"); // Get the modal
var btn = document.getElementById("sign-up-button"); // Get the button that opens the modal
var cancelBtn = document.getElementById("cancelbtn"); // Get the cancel button that appear within the modal
var mSubmit = document.getElementById("signupbtn"); // Get the submit button that appears within the modal

// ----------------------
//  FUNCTION DECLARATION
// ----------------------
var closeModal = function(){
  modal.style.display = "none";
};

var openModal = function(){
  modal.style.display = "block";
};

var modalSubmit = function(){
  // Needs something here to get and save the email and password information into the database
  location.replace("/profile");
};

// ---------
//  ACTIONS
// ---------
// When the user clicks the button, open the modal
btn.onclick = openModal;

// When the user clicks on the cancel button, close the modal
cancelBtn.onclick = closeModal;

// When the use clicks the submit button, launch modalSubmit();
mSubmit.onclick = modalSubmit;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
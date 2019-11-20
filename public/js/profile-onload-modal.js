// VALIDATION
console.log("profile-onload-modal.js loaded");

// ----------------------
//  VARIABLE DECLARATION
// ----------------------
var modal = document.getElementById("preliminary-modal"); // Get the modal
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
  console.log("Executing modalSubmit()");
  //send users to profile.handlebars
};

// ---------
//  ACTIONS
// ---------
// When the page loads, open the modal
openModal();

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

// VALIDATION
console.log("/js/modal/profile-onload-modal.js loaded");

// ----------------------
//  VARIABLE DECLARATION
// ----------------------
var modal = document.getElementById("preliminary-modal"); // Get the modal
var cancelBtn = document.getElementById("cancelbtn"); // Get the cancel button that appear within the modal
var mSubmit = document.getElementById("nextBtn"); // Get the submit button that appears within the modal

var photoModal = document.getElementById("photo-modal");
var photoCancel = document.getElementById("photo-cancel");
var photoSubmit = document.getElementById("photo-submit");


// ----------------------
//  FUNCTION DECLARATION
// ----------------------
var closeModal = function(){
  modal.style.display = "none";
};

var openModal = function(){
  modal.style.display = "block";
};

var closeModal2 = function(){
  photoModal.style.display = "none";
};

var openModal2 = function(){
  event.preventDefault();
  modal.style.display = "none";
  photoModal.style.display = "block";
};

var allDone = function(){
  console.log(">>>>> allDone clicked");
  event.preventDefault();
  location.replace("homepage"); 
};

// ---------
//  ACTIONS
// ---------
// When the page loads, open the modal
openModal();

// When the user clicks on the cancel button, close the modal
cancelBtn.onclick = closeModal;
photoCancel.onclick = closeModal2;

// When the use clicks the submit button, launch modalSubmit();
mSubmit.onclick = openModal2;
photoSubmit.onclick = allDone;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
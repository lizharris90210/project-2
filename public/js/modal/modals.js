console.log("/js/modal/modals.js\nThis file controls the behavior of the modals");
//  VARIABLE DECLARATION
// ----------------------
var modal = document.getElementById("sign-up-modal"); // Get the modal
var btn = document.getElementById("sign-up-link"); // Get the button that opens the modal
var cancelBtn = document.getElementById("cancelbtn"); // Get the cancel button that appear within the modal
var mSubmit = document.getElementById("signupbtn"); // Get the submit button that appears within the modal
var modal2 = document.getElementById("login-modal"); // Get the modal
var btn2 = document.getElementById("login-link"); // Get the button that opens the modal
var cancelBtn2 = document.getElementById("login-cancelbtn"); // Get the cancel button that appear within the modal
var mSubmit2 = document.getElementById("login-signupbtn"); // Get the submit button that appears within the modal


// ----------------------
//  FUNCTION DECLARATION
// ----------------------
var closeModal = function () {
  modal.style.display = "none";
};

var openModal = function () {
  modal.style.display = "block";
};

var modalSubmit = function () {
  // Needs something here to get and save the email and password information into the database
  // Getting references to our form and input
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var nameInput = $("input#first-name-input");

  event.preventDefault();
  var userData = {
    email: emailInput.val().trim(),
    password: passwordInput.val().trim(),
    firstname: nameInput.val().trim()
  };

  if (!userData.email || !userData.password) {
    return;
  }
  // If we have an email and password, run the signUpUser function
  signUpUser(userData.email, userData.password, userData.firstname);
  emailInput.val("");
  passwordInput.val("");
  nameInput.val("");
};

// Does a post to the signup route. If successful, we are redirected to the members page
// Otherwise we log any errors
function signUpUser(email, password, firstname) {
  $.post("/api/signup", {
    email: email,
    password: password,
    name: firstname
  })
    .then(function () {
      location.replace("/homepage");
      // If there's an error, handle it by throwing up a bootstrap alert
    })
    .catch(handleLoginErr);
}

function handleLoginErr(err) {
  $("#alert .msg").text(err.responseJSON);
  $("#alert").fadeIn(500);
}

var closeModal2 = function () {
  modal2.style.display = "none";
};

var openModal2 = function () {
  modal2.style.display = "block";
};

var modalSubmit2 = function () {
  // Needs something here to get and save the email and password information into the database
  location.replace("/homepage");
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

// When the user clicks the button, open the modal
btn2.onclick = openModal2;

// When the user clicks on the cancel button, close the modal
cancelBtn2.onclick = closeModal2;

// When the use clicks the submit button, launch modalSubmit();
mSubmit2.onclick = modalSubmit2;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
  if (event.target === modal2) {
    closeModal2();
  }
};
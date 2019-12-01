//  VARIABLE DECLARATION
// ----------------------
var signupModal = document.getElementById("sign-up-modal"); // Get the modal
var signupBtn = document.getElementById("sign-up-link"); // Get the button that opens the modal
var cancelSignup = document.getElementById("cancelbtn"); // Get the cancel button that appear within the modal
var signupSubmit = document.getElementById("signupbtn"); // Get the submit button that appears within the modal
var loginModal = document.getElementById("login-modal"); // Get the modal
var loginBtn = document.getElementById("login-link"); // Get the button that opens the modal
var cancelLogin = document.getElementById("login-cancelbtn"); // Get the cancel button that appear within the modal
var loginSubmit = document.getElementById("login-btn"); // Get the submit button that appears within the modal


// ----------------------
//  FUNCTION DECLARATION
// ----------------------
var closeSignup = function () {
  signupModal.style.display = "none";
};

var openSignup = function () {
  signupModal.style.display = "block";
};

var submitSignup = function () {
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
      location.replace("/signedup");
      // If there's an error, handle it by throwing up a bootstrap alert
    })
    .catch(handleLoginErr);
}

function handleLoginErr(err) {
  $("#alert .msg").text(err.responseJSON);
  $("#alert").fadeIn(500);
}

var closeLogin = function () {
  loginModal.style.display = "none";
};

var openLogin = function () {
  loginModal.style.display = "block";
};

var login = function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#login-email-input");
  var passwordInput = $("input#login-password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function() {
        window.location. replace("homepage");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};

// ---------
//  ACTIONS
// ---------
// When the user clicks the button, open the modal
signupBtn.onclick = openSignup;

// When the user clicks on the cancel button, close the modal
cancelSignup.onclick = closeSignup;

// When the use clicks the submit button, launch modalSubmit();
signupSubmit.onclick = submitSignup;

// When the user clicks the button, open the modal
loginBtn.onclick = openLogin;

// When the user clicks on the cancel button, close the modal
cancelLogin.onclick = closeLogin;

// When the use clicks the submit button, launch modalSubmit();
loginSubmit.onclick = login;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === signupModal) {
    signupModal.style.display = "none";
  }
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
};
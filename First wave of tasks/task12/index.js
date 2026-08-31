const fname = document.getElementById("fname-input");
const lname = document.getElementById("lname-input");
const email = document.getElementById("email-input");
const password = document.getElementById("password-input");

function validateFirstName() {
  const errorElement = document.getElementById("fnameError");

  if (fname.value.trim() === "") {
    errorElement.textContent = "First name is required.";
  } else if (!/^[A-Za-z]+$/.test(fname.value.trim())) {
    errorElement.textContent =
      "First name should not contain numbers or special characters.";
  } else {
    errorElement.textContent = "";
  }
}

function validateLastName() {
  const errorElement = document.getElementById("lnameError");

  if (lname.value.trim() === "") {
    errorElement.textContent = "Last name is required.";
  } else if (!/^[A-Za-z]+$/.test(lname.value.trim())) {
    errorElement.textContent =
      "Last name should not contain numbers or special characters.";
  } else {
    errorElement.textContent = ""; // Clear error if valid
  }
}

function validateEmail() {
  const errorElement = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.trim() === "") {
    errorElement.textContent = "Email is required.";
  } else if (!emailPattern.test(email.value.trim())) {
    errorElement.textContent = "Please enter a valid email address.";
  } else {
    errorElement.textContent = ""; // Clear error if valid
  }
}

function validatePassword() {
  const errorElement = document.getElementById("passwordError");
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (password.value.trim() === "") {
    errorElement.textContent = "Password is required.";
  } else if (
    password.length < 8 ||
    !passwordPattern.test(password.value.trim())
  ) {
    errorElement.textContent =
      "Password should be of at least 8 characters and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.";
  } else {
    errorElement.textContent = ""; // Clear error if valid
  }
}

function togglePassword() {
  const password = document.getElementById("password-input");

  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
}

function onSubmit() {
//   event.preventDefault();

  if (!fname.value.trim() || !lname.value.trim() || !email.value.trim() || !password.value.trim()) {
        event.preventDefault();
        alert("Please fill all fields.");
        return;
    }

  const fnameError = document.getElementById("fnameError").textContent;
  const lnameError = document.getElementById("lnameError").textContent;
  const emailError = document.getElementById("emailError").textContent;
  const passwordError = document.getElementById("passwordError").textContent;

  console.log("Errors : " + fnameError + " " + lnameError + " " + emailError + " " + passwordError );
  
  if (
    fnameError.length +
      lnameError.length +
      emailError.length +
      passwordError.length ===
    0
  ) {
    alert("Form submitted successfully!");
    fname.value = "";
    lname.value = "";
    email.value = "";
    password.value = "";

  }
}

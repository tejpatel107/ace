const fname = document.getElementById("fname-input");
const lname = document.getElementById("lname-input");
const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const genderError = document.getElementById("genderError");
const genderRadios = document.querySelectorAll("input[name=gender]");

genderRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    genderError.textContent = "";        
  })
})

function validateFirstName() {
  if (fname.value.trim() === "") {
    fnameError.textContent = "First name is required.";
    return false;
  }

  if (!/^[A-Za-z]+$/.test(fname.value.trim())) {
    fnameError.textContent =
      "First name should not contain numbers or special characters.";
    return false;
  }

  fnameError.textContent = "";
  return true;
}

function validateLastName() {
  const lnameError = document.getElementById("lnameError");

  if (lname.value.trim() === "") {
    lnameError.textContent = "Last name is required.";
    return false;
  }

  if (!/^[A-Za-z]+$/.test(lname.value.trim())) {
    lnameError.textContent =
      "Last name should not contain numbers or special characters.";
    return false;
  }

  lnameError.textContent = ""; // Clear error if valid
  return true;
}

function validateGender() {
  const selectedGender = [...genderRadios].some(radio=>radio.checked);

  if (!selectedGender) {
    genderError.textContent = "Please select a gender.";
    return false;
  }

  genderError.textContent = "";
  return true;
}

export function validateBasicInformation() {
  const firstNameValidation = validateFirstName();
  const lastNameValidation = validateLastName();
  const genderValidation = validateGender();

  if (firstNameValidation && lastNameValidation && genderValidation) {
    const selectedGender = document.querySelector(
      'input[name="gender"]:checked',
    );

    document.getElementById("summary-fname").textContent = fname.value.trim();
    document.getElementById("summary-lname").textContent = lname.value.trim();
    document.getElementById("summary-gender").textContent =
      selectedGender.value;

    return true;
  }

  return false;
}

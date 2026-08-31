const email = document.getElementById("email");
const contact = document.getElementById("contact");
const dob = document.getElementById("dob");
const zip = document.getElementById("zip");
const ip = document.getElementById("ip-address");

function validateEmail() {
  const errorElement = document.getElementById("emailError");

  if (email.value.trim() === "") {
    errorElement.textContent = "Email is required.";
    return false;
  }

  if (!email.validity.valid) {
    errorElement.textContent = "Please enter a valid email.";
    return false;
  }

  errorElement.textContent = "";
  return true;
}

function validateContact() {
  const errorElement = document.getElementById("contactError");

  const value = contact.value.trim();

  if (value === "") {
    errorElement.textContent = "Contact number is required.";
    return false;
  }

  if (!/^\d{10}$/.test(value)) {
    errorElement.textContent = "Contact number must contain 10 digits.";
    return false;
  }

  errorElement.textContent = "";
  return true;
}

function validateDOB() {
  const errorElement = document.getElementById("dobError");

  const value = dob.value.trim();

  if (value === "") {
    errorElement.textContent = "Date of birth is required.";
    return false;
  }

  const match = value.match(
    /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/,
  );

  if (!match) {
    errorElement.textContent = "Please enter the date in MM/DD/YYYY format.";
    return false;
  }

  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);

  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    errorElement.textContent = "Please enter a valid date.";
    return false;
  }

  errorElement.textContent = "";
  return true;
}

function validateZIP() {
  const errorElement = document.getElementById("zipError");

  const value = zip.value.trim();

  if (value === "") {
    errorElement.textContent = "ZIP code is required.";
    return false;
  }

  if (!/^\d{5,6}$/.test(value)) {
    errorElement.textContent = "Please enter a valid ZIP code.";
    return false;
  }

  errorElement.textContent = "";
  return true;
}

function validateIPAddress() {
  const errorElement = document.getElementById("ipError");

  const value = ip.value.trim();

  if (value === "") {
    errorElement.textContent = "IP address is required.";
    return false;
  }

  const parts = value.split(".");

  if (parts.length !== 4) {
    errorElement.textContent = "Please enter a valid IP address.";
    return false;
  }

  for (const part of parts) {
    if (!/^\d+$/.test(part)) {
      errorElement.textContent = "Please enter a valid IP address.";
      return false;
    }

    const number = Number(part);

    if (number < 0 || number > 255) {
      errorElement.textContent = "Please enter a valid IP address.";
      return false;
    }
  }

  errorElement.textContent = "";
  return true;
}

export function validateContactDetails() {
  const emailValid = validateEmail();
  const contactValid = validateContact();
  const dobValid = validateDOB();
  const zipValid = validateZIP();
  const ipValid = validateIPAddress();

  if (emailValid && contactValid && dobValid && zipValid && ipValid) {
    
    document.getElementById("summary-email").textContent = email.value.trim();
    document.getElementById("summary-contact").textContent = contact.value.trim();
    document.getElementById("summary-dob").textContent = dob.value.trim();
    document.getElementById("summary-zip").textContent = zip.value.trim();
    document.getElementById("summary-ip").textContent = ip.value.trim();

    return true;
  }

  return false;
}

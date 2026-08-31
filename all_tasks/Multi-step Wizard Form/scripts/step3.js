const sport = document.getElementById("sport-dropdown");
const bio = document.getElementById("bio-textarea");
const hours = document.getElementById("hours-input");
const money = document.getElementById("money-input");

function validateSport() {
  const errorElement = document.getElementById("sportError");

  if (sport.value === "") {
    errorElement.textContent = "Please select your favorite sport.";
    return false;
  }

  errorElement.textContent = "";
  return true;
}

function validateBio() {
  const errorElement = document.getElementById("bioError");

  // Bio is optional, so an empty value is valid.
  errorElement.textContent = "";
  return true;
}

function validateHours() {
  const errorElement = document.getElementById("hoursError");

  const value = hours.value.trim();

  if (value === "") {
    errorElement.textContent = "Hours are required.";
    return false;
  }

  if (!/^([1-9]|1[0-9]|2[0-3])$/.test(value)) {
    errorElement.textContent = "Please enter hours in HH format (0-23).";
    return false;
  }

  errorElement.textContent = "";
  return true;
}

function validateMoney() {
  const errorElement = document.getElementById("moneyError");

  const value = money.value.trim();

  if (value === "") {
    errorElement.textContent = "Money is required.";
    return false;
  }

  const moneyPattern = /^(?:\d{1,3}(?:,\d{2})*,\d{3}|\d+)\.\d{2}$/;

  if (!moneyPattern.test(value)) {
    errorElement.textContent = "Please enter a valid monetary value.";
    return false;
  }

  errorElement.textContent = "";
  return true;
}

export function validatePreferences() {
  const sportValid = validateSport();
  const bioValid = validateBio();
  const hoursValid = validateHours();
  const moneyValid = validateMoney();

  if (sportValid && bioValid && hoursValid && moneyValid) {
    document.getElementById("summary-sport").textContent = sport.value.trim();
    document.getElementById("summary-bio").textContent = bio.value.trim();
    document.getElementById("summary-hours").textContent = hours.value.trim();
    document.getElementById("summary-money").textContent = money.value.trim();

    return true;
  }

  return false;
}

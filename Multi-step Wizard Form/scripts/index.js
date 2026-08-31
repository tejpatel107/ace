import { validateBasicInformation } from "./step1.js";
import { validateContactDetails } from "./step2.js";
import { validatePreferences } from "./step3.js";

let currentTab = 1;
let editingRow = null;

const form = document.getElementById("form");

const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");

nextButton.addEventListener("click", gotoNextTab);

previousButton.addEventListener("click", gotoPreviousTab);

document.querySelectorAll(".edit-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    gotoDesiredStep(event.currentTarget.dataset.step);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!document.getElementById("terms-condition").checked) {
    return;
  }

  if (editingRow !== null) {
    updateRecordInTable(editingRow);
    editingRow = null;

    const submitButton = document.getElementById("submit-button");
    submitButton.textContent = "Submit";
    submitButton.classList.remove("update-mode");
  } else {
    addNewRecordToTable();
  }

  document.getElementById("form").reset();
  gotoDesiredStep(1);
});

// targets all input fields' error with input-fields class.
document.querySelectorAll(".input-fields").forEach((element) => {
  element.addEventListener("input", () => {
    const errorElement = element.parentElement.querySelector(".error");

    if (element.id === "dob") {
      let formatedDate = "";
      const date = element.value.split("/").join("");

      for (let i = 0; i < date.length; i++) {
        if (i === 2 || i === 4) {
          formatedDate += "/";
        }

        formatedDate += date[i];
      }
      element.value = formatedDate;
    }

    if (errorElement) {
      errorElement.textContent = "";
    }
  });
});

document.getElementById("money-input").addEventListener("input", (event) => {
  const amount = event.currentTarget;
  const [integerPart, decimalPart] = amount.value.split(".");
  const reversedIntegerPart = integerPart
    .split(",")
    .join("")
    .split("")
    .reverse()
    .join("");

  let formattedAmount = "";

  for (let i = 0; i < reversedIntegerPart.length; i++) {
    if (i === 3 || (i > 3 && (i - 3) % 2 === 0)) {
      formattedAmount += ",";
    }

    formattedAmount += reversedIntegerPart[i];
  }

  formattedAmount = formattedAmount.split("").reverse().join("");

  if (amount.value.includes(".")) {
    amount.value = formattedAmount + "." + decimalPart;
    return;
  }
  amount.value = formattedAmount;
});

document.getElementById("contact").addEventListener("input", () => {
  document.getElementById("contactError").textContent = "";
});

document.getElementById("sport-dropdown").addEventListener("change", () => {
  document.getElementById("sportError").textContent = "";
});

document
  .getElementById("records-table-body")
  .addEventListener("click", (event) => {
    const list = event.target.classList;
    // DELETE
    if (list.contains("record-delete-button")) {
      const currRowToBeDeleted = event.target.closest("tr");
      moveRecordsUpByOneBelow(currRowToBeDeleted.dataset.rowId);
      if (confirm("Are you sure you want to delete this record?")) {
        currRowToBeDeleted.remove();
      }
      return;
    }

    // EDIT
    if (list.contains("record-edit-button")) {
      const row = event.target.closest("tr");

      editingRow = row;

      const cells = row.querySelectorAll("td");

      // Fill form fields
      document.getElementById("fname-input").value = cells[1].textContent;
      document.getElementById("lname-input").value = cells[2].textContent;

      document.getElementById("email").value = cells[4].textContent;
      document.getElementById("contact").value = cells[5].textContent;
      document.getElementById("dob").value = cells[6].textContent;
      document.getElementById("sport-dropdown").value = cells[7].textContent;
      document.getElementById("bio-textarea").value = cells[8].textContent;
      document.getElementById("hours-input").value = cells[9].textContent;
      document.getElementById("ip-address").value = cells[10].textContent;
      document.getElementById("zip").value = cells[11].textContent;
      document.getElementById("money-input").value = cells[12].textContent;

      // Gender
      const gender = cells[3].textContent.toLowerCase();

      document.getElementById("male").checked = gender === "male";
      document.getElementById("female").checked = gender === "female";

      // Agreement
      const agreement = cells[13].textContent;

      document.getElementById("terms-condition").checked =
        agreement === "Agreed";

      // Hide submitted records while editing
      document.getElementById("records-container").hidden = true;

      const submitButton = document.getElementById("submit-button");

      submitButton.textContent = "Update";
      submitButton.classList.add("update-mode");

      // Go back to Step 1
      gotoDesiredStep(1);
    }
  });

function gotoNextTab() {
  if (currentTab < 4) {
    const currentStep = document.getElementById("step" + currentTab);
    let isStepValidated = false;

    switch (currentTab) {
      case 1:
        isStepValidated = validateBasicInformation();
        break;
      case 2:
        isStepValidated = validateContactDetails();
        break;
      case 3:
        isStepValidated = validatePreferences();
        break;
      default:
        break;
    }

    if (isStepValidated) {
      currentTab += 1;
      currentStep.hidden = true;
      document.getElementById("records-container").hidden = true;
      updateNavigationButtons();
      document.getElementById("step" + currentTab).hidden = false;
    }
  }
}

function gotoPreviousTab() {
  if (currentTab > 1) {
    const currentStep = document.getElementById("step" + currentTab);
    currentStep.hidden = true;
    currentTab -= 1;
    updateNavigationButtons();
    document.getElementById("step" + currentTab).hidden = false;
  }
}

function gotoDesiredStep(stepToBeEdit) {
  const currentStep = document.getElementById("step" + currentTab);
  currentStep.hidden = true;
  currentTab = Number(stepToBeEdit);
  updateNavigationButtons();
  document.getElementById("step" + currentTab).hidden = false;
}

function updateNavigationButtons() {
  previousButton.classList.toggle(
    "invisible",
    currentTab === 1 || currentTab === 4,
  );
  nextButton.classList.toggle("invisible", currentTab === 4);
  document
    .getElementById("submit-button")
    .classList.toggle("invisible", currentTab !== 4);
}

function addNewRecordToTable() {
  const tableBody = document.getElementById("records-table-body");

  const row = document.createElement("tr");
  row.dataset.rowId = tableBody.childElementCount + 1;

  const values = [
    tableBody.children.length + 1,
    document.getElementById("summary-fname").textContent,
    document.getElementById("summary-lname").textContent,
    document.getElementById("summary-gender").textContent,
    document.getElementById("summary-email").textContent,
    document.getElementById("summary-contact").textContent,
    document.getElementById("summary-dob").textContent,
    document.getElementById("summary-sport").textContent,
    document.getElementById("summary-bio").textContent,
    document.getElementById("summary-hours").textContent,
    document.getElementById("summary-ip").textContent,
    document.getElementById("summary-zip").textContent,
    document.getElementById("summary-money").textContent,
    document.getElementById("terms-condition").checked
      ? "Agreed"
      : "Not Agreed",
  ];

  values.forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  });

  const actionCell = document.createElement("td");

  actionCell.innerHTML = `
    <div class="record-actions">
      <button type="button" class="record-edit-button">
        Edit
      </button>

      <button type="button" class="record-delete-button">
        Delete
      </button>
    </div>
  `;

  row.appendChild(actionCell);

  tableBody.appendChild(row);

  // Show table ONLY after a record has been inserted
  document.getElementById("records-container").hidden = false;
}

function updateRecordInTable(row) {
  const cells = row.querySelectorAll("td");

  // Update values using the current summary values
  cells[1].textContent = document.getElementById("summary-fname").textContent;

  cells[2].textContent = document.getElementById("summary-lname").textContent;

  cells[3].textContent = document.getElementById("summary-gender").textContent;

  cells[4].textContent = document.getElementById("summary-email").textContent;

  cells[5].textContent = document.getElementById("summary-contact").textContent;

  cells[6].textContent = document.getElementById("summary-dob").textContent;

  cells[7].textContent = document.getElementById("summary-sport").textContent;

  cells[8].textContent = document.getElementById("summary-bio").textContent;

  cells[9].textContent = document.getElementById("summary-hours").textContent;

  cells[10].textContent = document.getElementById("summary-ip").textContent;

  cells[11].textContent = document.getElementById("summary-zip").textContent;

  cells[12].textContent = document.getElementById("summary-money").textContent;

  cells[13].textContent = document.getElementById("terms-condition").checked
    ? "Agreed"
    : "Not Agreed";

  document.getElementById("records-container").hidden = false;
}

function startNewRecord() {
  editingRow = null;

  document.getElementById("records-container").hidden = true;

  form.reset();

  const submitButton = document.getElementById("submit-button");
  submitButton.textContent = "Submit";
  submitButton.classList.remove("update-mode");

  gotoDesiredStep(1);
}

function moveRecordsUpByOneBelow(rowId) {
  const table = document.getElementById("records-table-body");
  const rows = table.childElementCount;
  const rowIndex = rowId - 1;
  const children = table.children;

  for (let i = rowIndex + 1; i < rows; i++) {
    children.item(i).dataset.rowId = i;
    children.item(i).firstChild.textContent = i;
  }
}

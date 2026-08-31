export const dropDownContainer = document.getElementById("dropdown-container");

export let isUserAtRootSelectOption = true; // [level = 0, listId = 0];
export let currentLevel = 0;
let currentSelectedOption = undefined;
const currentSelectedOptions = [];

export const rootDropDown = document.getElementById("root-dropdown");
export let currentDropDown = rootDropDown;

dropDownContainer.addEventListener("change", (event) => {
  currentDropDown = event.target;

  currentLevel = Number(currentDropDown.dataset.level);
  currentSelectedOption = currentDropDown.options[currentDropDown.selectedIndex];

  populateCurrentSelectedOptions();
  console.log(isUserAtRootSelectOption,"\n", currentSelectedOptions);
  if (currentLevel !== 0 || Number(currentSelectedOption.dataset.optionListId) > 0) {
    isUserAtRootSelectOption = false;
    handleParentSelect();
  } else {
    isUserAtRootSelectOption = true;
  }

});

export function addNewOptionToRootDropDown(listItem) {
  const option = document.createElement("option");
  option.value = listItem.dataset.listId;
  option.dataset.optionListId = listItem.dataset.listId;
  option.dataset.optionLevel = listItem.dataset.level;
  option.text = listItem.firstChild.firstChild.textContent;
  rootDropDown.append(option);
}

function populateCurrentSelectedOptions() {
  currentSelectedOptions.length = 0;

  currentSelectedOptions.push(
    ...[...dropDownContainer.children]
      .map(dropdown => dropdown.options[dropdown.selectedIndex])
      .filter(option => option && option.value !== "0")
  );
}

function handleParentSelect() {
  let selectedOptionId;
  const children = [];
  if (currentLevel === 0) {
    selectedOptionId = currentSelectedOption.dataset.optionListId;
    children.push(...getChildrenOfRootListItems(selectedOptionId));
  } else {
    selectedOptionId = currentSelectedOption.dataset.optionSubListId;
    // Find children of selected list item.
    children.push(...getChildrenOfSubListItems(selectedOptionId, currentLevel));
    console.log(children);
  }

  const nextLevel = currentLevel + 1;

  // Remove all dropdowns deeper than the current one.
  removeDropdownsAfter(currentLevel);

  // If selected item has no children,
  // don't create another dropdown.
  if (children.length === 0) {
    return;
  }

  // Create the next dropdown.
  const nextDropdown = createDropdown(nextLevel);

  // Populate it with children.
  populateDropdown(nextDropdown, children);

  dropDownContainer.appendChild(nextDropdown);
}

function createDropdown(level) {
  const select = document.createElement("select");

  select.dataset.level = level;

  const defaultOption = document.createElement("option");

  defaultOption.value = "0";
  defaultOption.dataset.optionSubListId = "0";
  defaultOption.dataset.optionLevel = level;
  defaultOption.textContent = "Select";

  select.appendChild(defaultOption);

  // select.addEventListener("change", handleParentSelect);

  return select;
}

function removeDropdownsAfter(level) {

  const dropdowns = Array.from(dropDownContainer.querySelectorAll("select"));

  for (const dropdown of dropdowns) {
    if (Number(dropdown.dataset.level) > level) {
      dropdown.remove();
    }
  }
}

function populateDropdown(dropdown, listItems) {
  for (const listItem of listItems) {
    const option = document.createElement("option");

    option.value = listItem.dataset.listId;
    option.dataset.optionSubListId = listItem.dataset.subListId;
    option.dataset.optionLevel = listItem.dataset.level;

    option.textContent =
      listItem.children[0].children[0].textContent;

    dropdown.appendChild(option);
  }
}

function getChildrenOfRootListItems(optionId) {
  return Array.from(document.querySelectorAll("[data-list-id]"))
    .find(item => item.dataset.listId === String(optionId)).lastElementChild.children;
}

function getChildrenOfSubListItems(optionId, level) {

  const rootListItem = document.querySelector(
    `[data-list-id="${currentSelectedOptions[0].dataset.optionListId}"]`
  );

  let currListItem = rootListItem;
  let currLevel = Number(rootListItem.dataset.level);

  let i = 1;

  while (currLevel < Number(level)) {

    currListItem = [...currListItem.lastElementChild.children]
      .find(element =>
        currentSelectedOptions[i].dataset.optionSubListId ===
        element.dataset.subListId
      );

    if (!currListItem) {
      return [];
    }

    currLevel = Number(currListItem.dataset.level);
    i++;
  }

  return currListItem.lastElementChild.children;
}

export function getParentElement() {
  const option = currentSelectedOptions.at(-1);
  const rootListItem = document.querySelector(
    `[data-list-id="${currentSelectedOptions[0].dataset.optionListId}"]`
  );

  // Adding directly under root
  if (Number(option.dataset.optionLevel) === 0) {
    return rootListItem;
  }

  let currentElement = rootListItem;

  // Find the element corresponding to the parent option
  for (let i = 1; i < currentSelectedOptions.length; i++) {
    currentElement = [...currentElement.lastElementChild.children]
      .find(element =>
        element.dataset.subListId ===
        currentSelectedOptions[i].dataset.optionSubListId
      );
  }

  return currentElement;
}

export function removeAllSubDropDowns() {
  removeDropdownsAfter(0);
  rootDropDown.selectedIndex = 0;
  isUserAtRootSelectOption = true;
}

export function updateDropdownOption(listItem) {
  const newTitle =
    listItem.querySelector(".list-title").textContent;

  const level = Number(listItem.dataset.level);

  const options = dropDownContainer.querySelectorAll("option");

  options.forEach(option => {

    if (level === 0) {
      if (
        option.dataset.optionListId === listItem.dataset.listId
      ) {
        option.textContent = newTitle;
      }
    } else {
      if (
        option.dataset.optionSubListId === listItem.dataset.subListId &&
        Number(option.dataset.optionLevel) === level
      ) {
        option.textContent = newTitle;
      }
    }

  });
}

export function removeDropdownOptions(listItem) {
  const itemsToRemove = [
    listItem,
    ...listItem.querySelectorAll(".list-item")
  ];

  const options = dropDownContainer.querySelectorAll("option");

  for (const item of itemsToRemove) {
    const level = Number(item.dataset.level);

    options.forEach(option => {

      if (level === 0) {
        if (
          option.dataset.optionListId === item.dataset.listId
        ) {
          option.remove();
        }
      } else {
        if (
          option.dataset.optionSubListId === item.dataset.subListId &&
          Number(option.dataset.optionLevel) === level
        ) {
          option.remove();
        }
      }

    });
  }
}
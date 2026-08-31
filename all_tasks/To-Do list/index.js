import { addNewOptionToRootDropDown, rootDropDown, isUserAtRootSelectOption, currentLevel, getParentElement, currentDropDown, removeAllSubDropDowns, updateDropdownOption } from "./DropDown.js";
import { editingElement, editMode, exitEditMode } from "./Edit.js";
import { createListItem, list } from "./ListItem.js";

const todoInput = document.getElementById("todo-input");
const newToDoAddButton = document.getElementById("add-button");

newToDoAddButton.addEventListener("click", () => {

  const inputValue = todoInput.value.trim();

  if (!inputValue) {
    return;
  }

  if (editMode) {
    editingElement.querySelector(".list-title").textContent = inputValue;
    updateDropdownOption(editingElement);
    exitEditMode();
    newToDoAddButton.textContent = "Add";
    todoInput.value = "";
    return;
  }

  const listItem = createListItem(inputValue);

  if (isUserAtRootSelectOption) {
    listItem.dataset.level = 0;
    listItem.dataset.listId = rootDropDown.childElementCount;
    list.append(listItem);
    addNewOptionToRootDropDown(listItem);
  } else {
    listItem.dataset.level = currentLevel + 1;
    const parent = getParentElement();

    console.log("CURRENT LEVEL:", currentLevel);
    console.log("PARENT:", parent);
    console.log("PARENT TEXT:", parent?.querySelector(".list-item-title")?.textContent);

    listItem.dataset.subListId = parent.lastElementChild.childElementCount + 1;
    parent.lastElementChild.appendChild(listItem);
    removeAllSubDropDowns();
  }

  todoInput.value = "";

});


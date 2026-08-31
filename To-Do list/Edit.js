import { dropDownContainer } from "./DropDown.js";
import { list } from "./ListItem.js";

export let editMode = false;
export let editingElement = undefined;

const todoInput = document.getElementById("todo-input");
const newToDoAddButton = document.getElementById("add-button");
const editHierarchyContainer = document.querySelector("#edit-hierarchy-container");

list.addEventListener("click", (event) => {

    const button = event.target.closest(".edit-button");

    if (!button) {
        return;
    }

    editMode = true;
    newToDoAddButton.textContent = "Update";
    todoInput.value = button.parentElement.querySelector(".list-title").textContent;
    editingElement = button.parentElement.parentElement;

    showEditHierarchy(getEditingElementHierarchy());
    dropDownContainer.classList.add("hidden");
    editHierarchyContainer.classList.add("visible");

});

export function getEditingElementHierarchy() {
    const hierarchy = [];

    let current = editingElement;
    let currentLevel = Number(current.dataset.level);

    while (currentLevel > 0) {
        current = current.parentElement.parentElement;
        hierarchy.push(current);
        currentLevel -= 1;
    }

    return hierarchy.reverse();
}

function showEditHierarchy(hierarchy) {
    editHierarchyContainer.replaceChildren();

    hierarchy.forEach((element, index) => {
        const label = element.querySelector(".list-title");

        const hierarchyItem = document.createElement("span");

        hierarchyItem.textContent = label.textContent;
        hierarchyItem.classList.add("hierarchy-item");

        editHierarchyContainer.appendChild(hierarchyItem);

        if (index < hierarchy.length - 1) {
            const arrow = document.createElement("span");

            arrow.textContent = " → ";
            arrow.classList.add("hierarchy-arrow");

            editHierarchyContainer.appendChild(arrow);
        }
    });
}

export function exitEditMode() {
    editMode = false;

    editHierarchyContainer.replaceChildren();

    editHierarchyContainer.classList.remove("visible");
    dropDownContainer.classList.remove("hidden");
}
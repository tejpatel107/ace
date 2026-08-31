import { removeDropdownOptions } from "./DropDown.js";

export const list = document.getElementById("list-container");

export function createListItem(inputValue) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");

    const listTitleContainer = document.createElement("div");
    listTitleContainer.classList.add("list-title-container");

    const subListContainer = document.createElement("div");
    subListContainer.classList.add("sub-list-container");

    const title = document.createElement("label");
    title.textContent = inputValue;
    title.classList.add("list-title");

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.classList.add("edit-button");
    editButton.textContent = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "x";

    deleteButton.addEventListener("click", (event) => {
        const listItem = event.currentTarget.closest(".list-item");

        removeDropdownOptions(listItem);

        listItem.remove();
    });

    listTitleContainer.append(
        title,
        editButton,
        deleteButton
    );

    listItem.append(
        listTitleContainer,
        subListContainer
    );

    return listItem;
}

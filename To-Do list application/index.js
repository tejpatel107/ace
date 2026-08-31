import { editingCard, clearListHierarchyBodyAndHideEditingCard, createParentListHierarchyOf } from "./EditingCard.js";

const todoInput = document.getElementById("todo-input");
const lists = document.getElementById("list-container");
const newToDoAddButton = document.getElementById("add-button");


let [editMode, editingListItem] = [false, null];

newToDoAddButton.addEventListener("click", () => {
  if (editMode) {
    editingListItem.textContent = todoInput.value;
    editMode = false;
    editingListItem = null;
    todoInput.value = null;
    newToDoAddButton.textContent = "Add";
    clearListHierarchyBodyAndHideEditingCard();
    return;
  }

  const listItem = createListItem(todoInput.value);
  listItem.classList.add("list-item-shadow");
  listItem.dataset.level = 1;
  todoInput.value = "";
  lists.append(listItem);
});

function createListItem(inputValue) {
  const listItem = document.createElement("div");
  listItem.dataset.listId = lists.childElementCount + 1;
  listItem.classList.add("list-item");

  const listTitleContainer = document.createElement("div");
  listTitleContainer.classList.add("list-title-container");

  const subListContainer = document.createElement("div");
  subListContainer.classList.add("sub-list-container");

  const title = document.createElement("label");
  title.textContent = inputValue;
  title.classList.add(".list-title");

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.textContent = "+";
  addButton.addEventListener("click", () =>
    handleAddSubListItem(subListContainer),
  );

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = "edit";
  editButton.addEventListener("click", () =>
    handleSubListEditButtonClick(title),
  );

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "x";
  deleteButton.addEventListener("click", (event) => {
    event.currentTarget.closest(".list-item").remove();
  });

  listTitleContainer.append(title, addButton, editButton, deleteButton);
  listItem.append(listTitleContainer, subListContainer);
  return listItem;
}

function createSubListItem() {
  return createListItem("");
}

function handleAddSubListItem(subListContainer) {
  const subListItem = createSubListItem();
  subListItem.dataset.listId = subListContainer.childElementCount + 1;
  subListItem.dataset.level =
    Number(subListContainer.parentElement.dataset.level) + 1;
  subListContainer.appendChild(subListItem);
}

function handleSubListEditButtonClick(listItemTitle) {
  editMode = true;
  editingListItem = listItemTitle;
  newToDoAddButton.textContent = "Update";
  todoInput.value = listItemTitle.textContent;
  document.getElementById("list-heirarchy-content").innerHTML = "";
  editingCard.classList.remove("hidden");
  createParentListHierarchyOf(getParentsOfCurrentElement(editingListItem));
}

function getParentsOfCurrentElement(element) {
  let immediateParentItem = element.closest(".list-item"); // level 3
  const parents = [];
  while (immediateParentItem) {
    immediateParentItem =
      immediateParentItem.parentElement?.closest(".list-item"); // 2
    immediateParentItem !== null && parents.push(immediateParentItem);
  }
  return parents.reverse();
}

// function createParentListHierarchyOf(parents) {
//   const rootList = document.createElement("ul");

//   let currentList = rootList;

//   for (const parent of parents) {
//     const listItem = createListHierarchyItemFor(parent);

//     currentList.appendChild(listItem);

//     const childList = document.createElement("ul");
//     listItem.appendChild(childList);

//     currentList = childList;
//   }

//   document.getElementById("list-heirarchy-content").append(rootList);
// }

// function createListHierarchyItemFor(parent) {
//   const listItem = document.createElement("select");
//   listItem
//   listItem.textContent = parent.children[0].children[0].textContent;
//   return listItem;
// }

// function clearListHierarchyBodyAndHideEditingCard() {
//   document.getElementById("list-heirarchy-content").innerHTML = "";
//   editingCard.classList.add("hidden");
// }

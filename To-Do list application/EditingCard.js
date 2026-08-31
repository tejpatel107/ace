export const editingCard =   document.getElementById("editing-card");

export function createParentListHierarchyOf(parents) {
  const hierarchy = document.getElementById("parent-hierarchy");

  // Clear existing hierarchy
  hierarchy.innerHTML = "";

  /*
   * parents is the current hierarchy path.
   *
   * Example:
   *
   * parents = [a, b, c]
   *
   * Result:
   *
   * [a] -> [b] -> [c]
   */

  for (let level = 0; level < parents.length; level++) {
    const currentParent = parents[level];

    /*
     * Determine which elements should appear
     * as options in this dropdown.
     */
    let availableChildParents;

    if (level === 0) {
      availableChildParents = getRootListItems();
    } else {
      const previousParent = parents[level - 1];

      availableChildParents = getChildListItems(previousParent);
    }

    /*
     * Add arrow before every dropdown except
     * the first one.
     */
    if (level > 0) {
      createHierarchyArrow(hierarchy);
    }

    const select = createParentDropdown(availableChildParents, currentParent, level);

    hierarchy.appendChild(select);
  }
}

function createParentDropdown(parents, selectedParent, level) {
  const select = document.createElement("select");

  select.classList.add("parent-select");

  select.dataset.level = level;

  for (const parent of parents) {
    const option = document.createElement("option");

    option.value = parent.dataset.id;

    option.textContent = getParentTitle(parent);

    if (parent === selectedParent) {
      option.selected = true;
    }

    select.appendChild(option);
  }

  select.addEventListener("change", handleParentSelectionChange);

  return select;
}

function createHierarchyArrow(container) {
  const arrow = document.createElement("span");

  arrow.classList.add("hierarchy-arrow");

  arrow.textContent = "→";

  container.appendChild(arrow);
}

function getRootListItems() {
  const listContainer = document.getElementById("list-container");

  return Array.from(listContainer.children);
}

function getChildListItems(parent) {

  const childList =
    parent.querySelector(
      ":scope > .sub-list-container"
    );

  if (!childList) {
    return [];
  }

  return Array.from(
    childList.children
  );
}

function getParentTitle(parent) {

  return parent
    .children[0]
    .children[0]
    .textContent;
}

function handleParentSelectionChange(event) {

  const changedSelect = event.currentTarget;

  const hierarchy =
    document.getElementById("parent-hierarchy");

  const selects =
    Array.from(
      hierarchy.querySelectorAll(".parent-select")
    );

  const changedIndex =
    selects.indexOf(changedSelect);

  /*
   * Remove everything after the dropdown
   * that was changed.
   */
  removeHierarchyAfter(
    hierarchy,
    changedIndex
  );

  /*
   * Find the newly selected list item.
   */
  const selectedParent =
    findListItemById(
      changedSelect.value
    );

  if (!selectedParent) {
    return;
  }

  /*
   * Get children of the newly selected parent.
   */
  const children =
    getChildListItems(selectedParent);

  /*
   * If there are no children, the hierarchy
   * ends here.
   */
  if (children.length === 0) {
    return;
  }

  /*
   * Add another dropdown containing the
   * children of the selected parent.
   */
  createHierarchyArrow(hierarchy);

  const childSelect =
    createParentDropdown(
      children,
      children[0],
      Number(changedSelect.dataset.level) + 1
    );

  hierarchy.appendChild(childSelect);
}

function removeHierarchyAfter(
  hierarchy,
  changedIndex
) {

  const selects =
    Array.from(
      hierarchy.querySelectorAll(".parent-select")
    );

  for (
    let i = selects.length - 1;
    i > changedIndex;
    i--
  ) {

    const select = selects[i];

    /*
     * The arrow is immediately before the
     * dropdown, so remove it too.
     */
    const arrow =
      select.previousElementSibling;

    if (
      arrow &&
      arrow.classList.contains(
        "hierarchy-arrow"
      )
    ) {
      arrow.remove();
    }

    select.remove();
  }
}

function findListItemById(id) {

  return document.querySelector(
    `.list-item[data-id="${id}"]`
  );
}

export function clearListHierarchyBodyAndHideEditingCard() {

  document.getElementById(
    "parent-hierarchy"
  ).innerHTML = "";

  editingCard.classList.add("hidden");
}
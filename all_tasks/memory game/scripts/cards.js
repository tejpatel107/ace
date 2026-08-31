import { handleCardClick } from "./CardMatch.js";

export function createCard(iconName) {
  const card = document.createElement("button");
  card.classList.add("card");
  card.type = "button";

  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  // Back
  const cardBack = document.createElement("div");
  cardBack.classList.add("card-face", "card-back");

  // Front
  const cardFront = document.createElement("div");
  cardFront.classList.add("card-face", "card-front");

  const frontIcon = document.createElement("i");
  frontIcon.classList.add("fa-solid", "fa-4x", iconName);
  card.dataset.icon = iconName.split("-")[1];

  cardFront.appendChild(frontIcon);

  // Build card
  cardInner.appendChild(cardBack);
  cardInner.appendChild(cardFront);

  card.appendChild(cardInner);

  card.addEventListener("click", handleCardClick);

  return card;
}
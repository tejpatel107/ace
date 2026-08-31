import { createCard } from "./cards.js";
import { getShuffledCards } from "./shuffle.js";
import { startTimer, clearTimer } from "./timer.js";

const refreshButton = document.querySelector(".refresh-button");
const gameBoard = document.getElementById("game-board");

// gameBoard.addEventListener("click", handleCardClick);

// Create 16 cells
for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  
  cell.classList.add("card-cell");

  gameBoard.appendChild(cell);
}

refreshButton.addEventListener("click", startNewGame);

function startNewGame() {
  const cells = document.querySelectorAll(".card-cell");

  // Remove old cards
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });

  // Reset timer
  clearTimer();

  // Get a new shuffled set
  const cards = getShuffledCards();

  // Put one card into each cell
  cells.forEach((cell, index) => {
    const card = createCard(cards[index]);

    cell.appendChild(card);
  });

  // Start timer
  startTimer();
}

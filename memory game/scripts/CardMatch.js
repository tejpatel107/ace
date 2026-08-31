import { clearTimer, timer } from "./timer.js";

let firstCard = null;
let secondCard = null;
let openedCards = 0;
let lockBoard = false;
let matchedPairs = 0;

export const handleCardClick = function (event) {
  if (lockBoard || openedCards === 2) {
    return;
  }

  const card = event.currentTarget;

  card.classList.toggle("flipped");

  if (openedCards === 0) {
    firstCard = card;
    openedCards += 1;
  } else {
    if (firstCard === card) {
      return;
    }

    secondCard = card;
    openedCards += 1;
    lockBoard = true;
    checkMatch();
  }
};

function checkMatch() {
  const firstIcon = firstCard.dataset.icon;
  const secondIcon = secondCard.dataset.icon;

  console.log("icons matched: " + firstIcon === secondIcon);

  if (firstIcon === secondIcon) {
    handleMatch();
  } else {
    handleMismatch();
  }
}

function handleMatch() {
  matchedPairs++;

  setTimeout(() => {
    firstCard.remove();
    secondCard.remove();

    resetTurn();
  }, 500);

  // 8 pairs = 16 cards matched
  if (matchedPairs === 8) {
    setTimeout(() => {
      gameCompleted();
    }, 500);
  }
}

function handleMismatch() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");

    resetTurn();
  }, 500);
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  openedCards = 0;
}

function gameCompleted() {
  // Stop your timer here
  const time = clearTimer();
  console.log("Congratulations! You completed the game.");
  document.querySelector(".message").textContent =
    "Congratulations! You completed the game within " + time;
}

// export function handleCardClick(event) {
//   const card = event.target.closest(".card");

//   // Ignore clicks outside cards
//   if (!card) return;

//   if (openedCards === 2) return;

//   // Don't allow clicking while comparing two cards
//   if (lockBoard) return;

//   // Don't allow clicking an already matched card
//   if (card.classList.contains("matched")) return;

//   // Don't allow clicking the same card twice
//   if (card === firstCard) return;

//   // Flip the card
//   card.classList.add("flipped");

//   // First card
//   if (firstCard === null) {
//     firstCard = card;
//     openedCards += 1;
//     return;
//   }

//   // Second card
//   secondCard = card;
//   openedCards += 1;
//   checkMatch();
// }

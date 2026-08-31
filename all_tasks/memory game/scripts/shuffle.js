export const iconPool = [
  "fa-otter",
  "fa-dog",
  "fa-cat",
  "fa-fish",
  "fa-crow",
  "fa-dove",
  "fa-horse",
  "fa-frog",
  "fa-dragon",
  "fa-spider",

  "fa-hippo",
  "fa-elephant",
  "fa-paw",
  "fa-apple-whole",
  "fa-lemon",
  "fa-carrot",
  "fa-pepper-hot",
  "fa-cookie",
  "fa-ice-cream",
  "fa-pizza-slice",

  "fa-burger",
  "fa-cake-candles",
  "fa-bread-slice",
  "fa-chess-knight",
  "fa-chess-rook",
  "fa-chess-bishop",
  "fa-chess-queen",
  "fa-chess-king",
  "fa-dice",
  "fa-gamepad",

  "fa-ghost",
  "fa-robot",
  "fa-rocket",
  "fa-plane",
  "fa-car",
  "fa-bicycle",
  "fa-motorcycle",
  "fa-truck",
  "fa-bus",
  "fa-ship",

  "fa-anchor",
  "fa-umbrella",
  "fa-sun",
  "fa-moon",
  "fa-cloud",
  "fa-snowflake",
  "fa-bolt",
  "fa-fire",
  "fa-tree",
  "fa-leaf",

  "fa-mug-hot",
  "fa-camera",
  "fa-music",
  "fa-headphones",
  "fa-heart",
  "fa-star",
  "fa-gift",
];

function shuffle(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

export function getShuffledCards() {
  const selectedIcons = shuffle(iconPool).slice(0, 8);
  const pairs = [...selectedIcons, ...selectedIcons];
  return shuffle(pairs);
}

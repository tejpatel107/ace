const port = window.location.port;
const connection = new WebSocket(`ws://localhost:${port}`);

const grid = document.getElementById("grid");

function createGrid() {

    for (let row = 0; row < 3; row++) {

        for (let col = 0; col < 3; col++) {

            const cell = document.createElement("div");

            cell.classList.add("cell");

            cell.dataset.row = row;
            cell.dataset.col = col;

            grid.appendChild(cell);
        }
    }
}

createGrid();

connection.onopen = () => connection.send("hello from uncoloured grid.");

connection.onmessage = (response) => {

    const message = JSON.parse(response.data);

    console.log("Received:", message);

    const cell = document.querySelector(
        `[data-row="${message.row}"][data-col="${message.col}"]`
    );

    cell.style.backgroundColor = message.color;

};


const colors = [
    "#7b3030",
    "#175078",
    "#006b1b",
    "#684800",
    "#ff6b2b",
    "#ed82b1",
    "#ffffff",
    "#31a88b",
    "#008ca3"
];

const port = window.location.port;
const connection = new WebSocket(`ws://localhost:8080`);

connection.onopen = () => {
    connection.send("hello form coloured grid.");
};

connection.onmessage = (message) => {
    console.log(message);
};

const grid = document.getElementById("grid");

function createGrid() {

    for (let row = 0; row < 3; row++) {

        for (let col = 0; col < 3; col++) {

            const cell = document.createElement("div");

            cell.classList.add("cell");

            cell.dataset.row = row;
            cell.dataset.col = col;

            const color = colors[row * 3 + col];

            cell.style.backgroundColor = color;

            cell.addEventListener("click", () => {

                const message = {
                    type: "cell-click",
                    row: row,
                    col: col,
                    color: color
                };

                connection.send(JSON.stringify(message));

                console.log("Sent:", message);
            });

            grid.appendChild(cell);
        }
    }
}

createGrid();



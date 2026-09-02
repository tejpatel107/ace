
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { WebSocketServer, WebSocket } from "ws";

const app = express();
const port : number = 8080;

const __filename : string = fileURLToPath(import.meta.url);
const __dirname : string = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/uncoloured-grid")));

const server = app.listen(port, () => {
    console.log(`server is listening on ${port}...`);
});

const wss : WebSocketServer = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("data from client : ", data.toString()); 
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data.toString());
            }
        })
    });
})
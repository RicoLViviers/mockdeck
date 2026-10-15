const http = require("node:http");
const users = require("../examples/users.json");

const PORT = 3000;

// Handle incoming HTTP requests.
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/users") {
        res.writeHead(200);
        res.end(JSON.stringify(users));
        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({
        error: "Route not found"
    }));
});

// Start the server.
function startServer() {
    server.listen(PORT, () => {
        console.log(`Mockdeck running at http://localhost:${PORT}`);
    });
}

module.exports = { startServer };
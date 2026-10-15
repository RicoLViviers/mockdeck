const http = require("node:http");
const users = require("../examples/users.json");

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
function startServer(port = 3000) {
    server.listen(port, () => {
        console.log(`Mockdeck running at http://localhost:${port}`);
    });
}

module.exports = { startServer };
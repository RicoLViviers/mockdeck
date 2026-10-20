const http = require("node:http");
const fs = require("node:fs");

function startServer(options) {
    const data = JSON.parse(fs.readFileSync(options.file, "utf8"));

    const server = http.createServer((req, res) => {
        res.setHeader("Content-Type", "application/json");

        const type = req.url.slice(1);

        if (req.method === "GET" && Object.keys(data).includes(type)) {
            res.writeHead(200);
            res.end(JSON.stringify(data[type]));
            return;
        }

        res.writeHead(404);
        res.end(JSON.stringify({
            error: "Route not found"
        }));
    });

    server.listen(options.port, () => {
        console.log(`Mockdeck running at http://localhost:${options.port}`);
    });
}

module.exports = { startServer };
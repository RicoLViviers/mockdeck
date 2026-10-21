const http = require("node:http");
const fs = require("node:fs");

function startServer(options) {
    let data;
    try {
        data = JSON.parse(fs.readFileSync(options.file, "utf8"));
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new Error("Invalid JSON syntax in file.");
        }

        switch (err.code) {
            case "ENOENT":
                throw new Error(`File doesn't exist: ${options.file}`);
            default:
                throw new Error(`Failed to load JSON file: ${err.message}`);
        }
    }

    if (typeof data !== "object" || data === null || Array.isArray(data)) {
        throw new Error("JSON data must be an object containing resources.");
    }

    for (const [resource, collection] of Object.entries(data)) {
        if (!Array.isArray(collection)) {
            throw new Error(`Resource "${resource}" must contain an array.`);
        }
    }

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
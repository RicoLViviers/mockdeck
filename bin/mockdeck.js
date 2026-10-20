#!/usr/bin/env node

const { startServer } = require("../src/server");

function processArgs(args) {
    const options = {
        file: null,
        help: false,
        port: 3000
    }

    for (let i=0; i<args.length; i++) {
        const arg = args[i];

        if (arg === '-h' || arg === '--help') {
            help = true;
        } else if (arg === '-p' || arg === '--port') {
            const value = args[++i];
            const port = Number(value);

            if (
                !Number.isInteger(port) ||
                port < 1 ||
                port > 9999
            )
            {
                throw new Error("Port number must be bigger than 1 and smaller than 9999");
            }
        }
    }

    return options;
}

try {
    const port = processArgs(process.argv.slice(2)).port;
    startServer(port);
} catch (error) {
    console.error(error.message);
    process.exitCode = 1;
}
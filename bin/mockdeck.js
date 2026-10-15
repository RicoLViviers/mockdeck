#!/usr/bin/env node

const { startServer } = require("../src/server");

function getPort(args)
{
    const portIndex = args.findIndex((arg) => arg === "--port" || arg === "-p");

    if (portIndex === -1)
    {
        return 3000;
    }

    const value = args[portIndex + 1];
    const port = Number(value);

    if (
        !Number.isInteger(port) ||
        port < 1 ||
        port > 9999
    )
    {
        throw new Error("Port number must be bigger than 1 and smaller than 9999");
    }

    return port
}

try {
    const port = getPort(process.argv.slice(2));
    startServer(port);
} catch (error) {
    console.error(error.message);
    process.exitCode = 1;
}
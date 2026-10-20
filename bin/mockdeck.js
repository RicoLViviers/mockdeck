#!/usr/bin/env node

const { processArgs, printHelp } = require("../src/cli");
const { startServer } = require("../src/server");

try {
    const options = processArgs(process.argv.slice(2));

    if (options.help) {
        printHelp();
    } else {
        startServer(options.port);
    }
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
}
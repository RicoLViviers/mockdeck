function processArgs(args) {
    const options = {
        file: null,
        help: false,
        port: 3000
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === "-h" || arg === "--help") {
            options.help = true;
        } else if (arg === "-p" || arg === "--port") {
            const value = args[++i];
            const port = Number(value);

            if (
                value === undefined ||
                !Number.isInteger(port) ||
                port < 1 ||
                port > 9999
            ) {
                throw new Error(
                    "Port must be an integer between 1 and 9999."
                );
            }

            options.port = port;
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    return options;
}

function printHelp() {
    console.log(`
Mockdeck - A zero-config CLI for generating mock REST APIs.

Usage:
  mockdeck [options]

Options:
  -p, --port <port>  Set the server port (default: 3000)
  -h, --help         Display this help message
`);
}

module.exports = {
    processArgs,
    printHelp
};
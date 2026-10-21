# Mockdeck

**A zero-config CLI for generating mock REST APIs from JSON files.**

A zero-config Node.js CLI that instantly generates mock REST APIs from JSON files, with automatic CRUD endpoints, realistic fake data, and a live browser dashboard.

## Features

- **Zero-config setup** - start a mock API server with minimal configuration.
- **JSON responses** - serve structured JSON data through HTTP endpoints.
- **Configurable port** - choose which port the server listens on.
- **JSON 404 responses** - receive a structured error response for unknown routes.

## Installation

Clone the repository:

```bash
git clone https://github.com/RicoLViviers/mockdeck.git
cd mockdeck
```

Install dependencies:

```bash
npm install
```

## Usage

Start the server using the Mockdeck CLI:

```bash
node bin/mockdeck.js
```

By default, the server runs on port `3000`.

### Custom port

Specify a port using `--port` or `-p`:

```bash
node bin/mockdeck.js --port 4000
```

```bash
node bin/mockdeck.js -p 4000
```

## API

### Available endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/users` | Returns the configured mock user data. |
| `*` | Unknown routes | Returns a JSON 404 response. |

### Example response

Request:

```http
GET /users
```

The endpoint returns JSON data from the project's example user dataset.

### Error response

Requests to unknown routes return a JSON error indicating that the route was not found.

## Tech Stack

- **Runtime:** Node.js
- **Language:** JavaScript
- **Protocol:** HTTP
- **Data format:** JSON

## Development

Run the project locally:

```bash
npm install
node bin/mockdeck.js
```

Run the test command:

```bash
npm test
```

Automated test coverage is still a work in progress.

## Contributing

Contributions, bug reports, and feature suggestions are welcome.

1. Fork the repository.
2. Create a branch for your changes.
3. Commit your changes.
4. Open a pull request.

## License

Mockdeck is licensed under the [MIT License](LICENSE).

---

**Repository:** [RicoLViviers/mockdeck](https://github.com/RicoLViviers/mockdeck)
// Require the http module from Node
const http = require('http');

// Define the port number
const PORT = 8080;

// Create the server
const server = http.createServer((req, res) => {
  // Log each request path to the console
  console.log(`Received request for: ${req.url}`);

  // Set response status code and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response body
  res.end('Hello World');
});

// Add a listener for when the server starts
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
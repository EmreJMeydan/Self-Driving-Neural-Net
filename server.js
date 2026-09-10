const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end("Hello from my server!");
});

const PORT = 3000; 

server.listen(PORT, 'localhost', () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
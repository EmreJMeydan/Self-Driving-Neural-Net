const http = require("http");
const fs = require('fs');


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end("Hello from my server!");
});

readFileSync('index.html', 'utf8') 


const PORT = 3000; 

server.listen(PORT, 'localhost', () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
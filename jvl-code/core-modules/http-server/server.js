const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type':"application/json"});
    res.end(`{name : "Mohamed Thayub"}`);
});

server.listen(5000, () => {
    console.log("Server listening http://localhost:5000");
});
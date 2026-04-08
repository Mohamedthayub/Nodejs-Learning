const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.writeHead(200,{'content-type':"text/plain"});
        res.end("Home Page");
    }
    else if (req.url == "/about"){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("About Page");
    } 
    else if (req.url == "/contact"){
        res.writeHead(200,{'content-type':'text-plain'});
        res.end("Contact Page");
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("Page Not Found");
    }
});



server.listen(5000, () => {
    console.log("Server listening http://localhost:5000");
})
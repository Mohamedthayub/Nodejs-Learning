const http = require('http');
// console.log(http);


const httpServer =  http.createServer((req,res) => {
    // if(req.utl)
    // console.log(req.url)
    if(req.url == "/"){
       res.writeHead(200,{'content-type': 'text/plain'});
       res.end("Home Page");
    }
    else if (req.url  == "/about"){
        res.writeHead(200,{'content-type' : 'text/plain'});
        res.end("About Page");
    }
    else if (req.url == "/contact"){
        res.writeHead(200,{'content-type' : 'text/plain'});
        res.end("Contact Page");
    }
    else{
        res.writeHead(200,{"content-type": 'text/plain'});
        res.end("Page Not Found");
    }
});

httpServer.listen(3000,() => {
    console.log("Server listening http://localhost:3000")
});
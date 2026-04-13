const http = require('http');
const fs  = require('fs');
const httpServer = http.createServer((req,res) => {
   if(req.url == "/"){
      res.writeHead(200,{'content-type' :'text/plain'});
      res.end("Home Page");
   } 
   else if(req.url == "/about"){
     res.writeHead(200,{'content-type' : 'text/plain'});
     res.end("ABout Page");
   }
    else if(req.url == "/file"){
    const readStream  = fs.createReadStream("./sample.mp4" )
     res.writeHead(200,{'content-type' : 'video/mp4'});
    //  res.end("File Page");
    readStream.pipe(res);
   }
   else{
        res.writeHead(404,{'content-type' : 'text/plain'});
        res.end("Page Not Found");
   }
});


httpServer.listen(3000, () => {
    console.log("Server listening http://localhost:3000");
});

const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    if(req.url == "/home"){
        res.end("I am home page");
    } else if (req.url == "/about"){
        res.end("I am about page");
    
    } else if (req.url == "/contact"){
        res.end("I am contact page");
    } else {
        res.writeHead(404,{'content-type': 'text/html'});
        res.end("<h2>404 error page. page doesn't exist<h2>");
    }
  });
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the 8000 port .");
});
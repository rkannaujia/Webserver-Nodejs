const http = require('http');
// create server using Asynchronous method 
// by default it contain request and response  argument
const server = http.createServer((req , res) => {
    res.end("Hello from other side");
});
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the 8000 port .");
})
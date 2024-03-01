//using http module given by node we can setup basic server
const http = require("http");

const host = 'localhost';
const port = 3000;



// http module has function createServer
// this createServer function takes callback as input
// inside callback 2 argument --:request->all details abt incoming request
// ---response ->this contain function using which we prepare response
// create server function return server object

// Port-:
const server = http.createServer(function exec(request, response) {
    // console.log(request.method)
    // if(request.url=='/home'){
    //     response.end('Welcome to home')
    // }
    // else if(request.url=='/faq'){
    //     response.end('This is company site')
    // }
    // else{
    //     response.end("Hello World")
    // }
    
});
server.listen(port, host,function process () {
    // once server start this callback executed
    // it keep on running till I stop.
    console.log(`Server is running on http://${host}:${port}`);
});
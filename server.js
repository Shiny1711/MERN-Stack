const http1 = require('http');//calling the weserver protocol = http
const webserver=http1.createServer((req,res)=>{//create the web server
    const smodule = require("./smodule");
    smodule("Shiny Alex");
    res.end("Welcome world"); //response to the client
});
webserver.listen(2222,()=> //assign the port number
{
    
    console.log("The server running under the port number: http://localhost:2222");//for inform to the user for running our app
});

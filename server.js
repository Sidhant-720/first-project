// const http = require("http");

// const server = http.createServer((req,res) => {

// res.writeHead(200, {
//     "content-type": "text/plain"
// });
 
// res.end ("hello bhai maine ye 2nd server create kiya hai");

// });

// server.listen(3000,() =>{
//     console.log ("server is running at http://localhost:3000");
// });


// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//     res.send ("hello bhai maine ye express p server banaya hai");

// });

// app.listen(3000, () =>{
//     console.log ("server is running at http://localhost:3000");
// });


const express = require("express");

const app = express();

// home route

app.get ("/", (req, res) =>{
    res.send ("this is about home page");

});

// about route 

app.get ("/about", (req, res) =>{
       res.send ("this is about page");
});

// contact route

app.get ("/contact", (req, res) => {
    res.send ("this is contact page");

});

// unknown route 

app.use ((req, res) =>{
    res.status (404) .send ("404 page not found");

});

app.listen(3000, () =>{
    console.log ("server is running at http://localhost:3000");
});
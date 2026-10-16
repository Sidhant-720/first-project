// const name = "sidhant kumar karmali";

// function greet(user) {
//     return `Hello ${user}, welcome to node js!`;

// }

// console.log (greet(name));

// const fs = require("fs");

// fs.writeFileSync("sid.txt", "main node js ki taiyari kar rha huu");

// console.log ("file successfully create ho gyi hai");

// const fs = require("fs");

// fs. appendFileSync("sid.txt","\n hame mehnat karte rahni chahiye");

// console.log("new text edit ho gya hai");


const fs = require("fs");

const data = fs.readFileSync("sid.txt", "utf-8");

console.log(data);



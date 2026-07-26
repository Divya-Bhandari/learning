const fs = require("fs");

console.log("Start");
const name = "Ram";

console.log(name);

fs.readFile("data.txt", "utf-8", (error, data)=>{
        if (error) {
        console.log(error);
        return;
    }
    console.log(data);
});

console.log("End");


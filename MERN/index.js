const fs = require("fs");

console.log("Start");

const name = "Ram";

console.log("Name:", name);

// Read file asynchronously
fs.readFile("data.txt", "utf-8", (error, data) => {
    if (error) {
        console.log("Error reading file:", error);
        return;
    }

    console.log("File Content:");
    console.log(data);

    // Write data to a new file
    fs.writeFile(
        "output.txt",
        "This file was created using Node.js.",
        (error) => {
            if (error) {
                console.log("Error writing file:", error);
                return;
            }

            console.log("output.txt created successfully.");

            // Append new content
            fs.appendFile(
                "output.txt",
                "\nWelcome to Node.js File System.",
                (error) => {
                    if (error) {
                        console.log("Error appending file:", error);
                        return;
                    }

                    console.log("Content appended successfully.");

                    // Read the updated file
                    fs.readFile("output.txt", "utf-8", (error, updatedData) => {
                        if (error) {
                            console.log(error);
                            return;
                        }

                        console.log("Updated File Content:");
                        console.log(updatedData);
                    });
                }
            );
        }
    );
});

console.log("End");
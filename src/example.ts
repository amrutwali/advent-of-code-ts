import * as fs from "fs";
import * as path from "path";

// File paths
const testFile: string = path.join("./data", "test");

// Read from file
const readFile = (filePath: string) => {
    const fileContents: string = fs.readFileSync(filePath, "latin1");

    // Concatenate the lines into a single line
    const lines: string[] = fileContents.split("\n");

    let sentence: string = "";
    for (const word of lines) {
        sentence += word.trim() + " ";
    }

    // Print output
    console.log(`[FILECONTENTS]: ${sentence}`);
};

readFile(testFile);

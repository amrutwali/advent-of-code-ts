import { readFile } from "fs/promises";
import * as path from "path";

export default async function part01(): Promise<number | void> {
    // Input file path
    const filePath = path.join("data", "ch-01", "input");

    try {
        // Read file
        const content = await readFile(filePath, "latin1");

        // Variables to store results
        let sum: number = 0;

        // Iterate through each line
        for (const line of content.split("\n")) {
            let numbers: number[] = new Array<number>();

            // Run through all the characters
            for (let i = 0; i < line.length; i++) {
                // Add all numbers
                if (!isNaN(parseInt(line[i]))) {
                    numbers.push(parseInt(line[i]));
                }
            }

            // Find the first and last number
            const first: number = numbers[0];
            const last: number = numbers[numbers.length - 1];

            // After each line, add it to the total
            sum += first * 10 + last;
        }

        const result: number = sum;
        return result;
    } catch (error) {
        console.error(`[ERR CH01]: ${error}`);
    }
}

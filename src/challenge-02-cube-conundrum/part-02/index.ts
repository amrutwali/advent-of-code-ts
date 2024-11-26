import * as path from "path";
import { readFile } from "fs/promises";

// Game 1: 1 red, 10 blue, 5 green; 11 blue, 6 green; 6 green; 1 green, 1 red, 12 blue; 3 blue; 3 blue, 4 green, 1 red

type MaxVal = {
    red: number;
    green: number;
    blue: number;
};

export default async function part02(): Promise<number | void> {
    // File path
    const filePath = path.join("data", "ch-02", "input");

    try {
        // Read File
        const content = await readFile(filePath, "latin1");
        // Create Variables
        let sum: number = 0;

        // Process file
        for (const line of content.split("\n")) {
            // Remove game ID
            const [_, gameContent] = line.split(":");
            const rounds: string[] = gameContent.split(";");

            // Store max turn data
            let maxVal: MaxVal = { red: 0, green: 0, blue: 0 };

            for (const round of rounds) {
                const turns = round.split(",");

                for (const turn of turns) {
                    const [count, color] = turn.trim().split(" ");

                    maxVal[color as keyof MaxVal] = Math.max(
                        parseInt(count),
                        maxVal[color as keyof MaxVal]
                    );
                }
            }

            // Calculate power
            const power: number =
                (maxVal.red ? maxVal.red : 1) *
                (maxVal.blue ? maxVal.blue : 1) *
                (maxVal.green ? maxVal.green : 1);

            sum += power;
        }
        // Return result
        const result = sum;
        return result;
    } catch (error) {
        console.error(`[ERR CH02]: ${error}`);
    }
}

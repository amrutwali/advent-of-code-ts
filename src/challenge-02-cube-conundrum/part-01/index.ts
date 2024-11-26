import * as path from "path";
import { readFile } from "fs/promises";

// Game 1: 1 red, 10 blue, 5 green; 11 blue, 6 green; 6 green; 1 green, 1 red, 12 blue; 3 blue; 3 blue, 4 green, 1 red

const maxVal: Record<string, number> = {
    red: 12,
    green: 13,
    blue: 14,
};

export default async function part01(): Promise<number | void> {
    // File path
    const filePath = path.join("data", "ch-02", "input");

    try {
        // TODO: Read file
        const contents = await readFile(filePath, "latin1");
        // TODO: Process Data
        const validity = new Array<boolean>();

        for (const line of contents.split("\n")) {
            // TODO: Store three data. 1. Game ID. 2. Sum of each of the balls
            // Can be done in two ways
            // [ { red: x, green: y, blue: z }, ... ]
            // { 1: { red: x, green: y, blue: z }, ... }
            // Or evaluate everything and just store the validity
            const [_, gameContent] = line.split(":");
            const rounds: string[] = gameContent.split(";");

            let flag: boolean = true;

            for (const round of rounds) {
                const turns = round.split(",");

                for (const turn of turns) {
                    const [count, color] = turn.trim().split(" ");

                    if (parseInt(count) > maxVal[color]) flag = false;
                }
            }

            if (flag) validity.push(true);
            else validity.push(false);
        }

        let sum: number = 0;
        validity.forEach((value, index) => {
            if (value) sum += index + 1;
        });

        // Return Result
        const result = sum;
        return result;
    } catch (error) {
        console.error(`[ERR CH02]: ${error}`);
    }
}

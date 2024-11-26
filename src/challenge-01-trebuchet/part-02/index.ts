import * as path from "path";
import { readFile } from "fs/promises";

const convertTextToNumber: (text: string) => number | undefined = (
    text: string
) => {
    switch (text) {
        case "0":
            return 0;
        case "1":
        case "one":
            return 1;
        case "2":
        case "two":
            return 2;
        case "3":
        case "three":
            return 3;
        case "4":
        case "four":
            return 4;
        case "5":
        case "five":
            return 5;
        case "6":
        case "six":
            return 6;
        case "7":
        case "seven":
            return 7;
        case "8":
        case "eight":
            return 8;
        case "9":
        case "nine":
            return 9;
        default:
            return undefined;
    }
};

export default async function part02(): Promise<number | void> {
    // File Path
    const filePath = path.join("data", "ch-01", "input");

    try {
        // Read File
        const contents = await readFile(filePath, "latin1");

        // Variables
        let sum: number = 0;
        const regexPattern: RegExp =
            /(0|1|2|3|4|5|6|7|8|9|one|two|three|four|five|six|seven|eight|nine)/g;

        // Parse Lines
        for (const line of contents.split("\n")) {
            // Find all the matches in the line
            const matches = line.match(regexPattern);

            // Find the first and last number
            if (matches?.length) {
                let first: number | undefined = convertTextToNumber(matches[0]);
                let last: number | undefined = convertTextToNumber(
                    matches[matches.length - 1]
                );

                if (first && last) {
                    sum += first * 10 + last;
                } else
                    throw new Error(
                        "Either first number or last number not parsed correctly"
                    );
            } else {
                throw new Error("No Match found for line");
            }
        }

        const result: number = sum;
        return result;
    } catch (error) {
        console.error(`[ERR CH01]: ${error}`);
    }
}

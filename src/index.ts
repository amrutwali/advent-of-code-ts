// TODO: import day wise problems
import challenge01 from "./challenge-01-trebuchet/index.js";
import challenge02 from "./challenge-02-cube-conundrum/index.js";

// TODO: run and evaluate them one by one
const evaluator: (challengeNumber: number) => void = async (
    challengeNumber
) => {
    switch (challengeNumber) {
        case 1: {
            // Challenge 01
            console.info(`[START]: Challenge 01`);
            const resultChallenge01 = await challenge01();
            console.info(
                `\n[SOLUTION 01]: ${JSON.stringify(resultChallenge01)}\n`
            );
            console.info(`[END]`);
            return;
        }
        case 2: {
            // Challenge 02
            console.info(`[START]: Challenge 02`);
            const resultChallenge01 = await challenge02();
            console.info(
                `\n[SOLUTION 02]: ${JSON.stringify(resultChallenge01)}\n`
            );
            console.info(`[END]`);
            return;
        }
    }
};

// Get command Line args
const args = process.argv.slice(2);

// Validate if the program number is passed as an argument
if (!args.length) {
    throw new Error(
        "Argument <program number> not passed. Please add and argument and run again"
    );
} else {
    // Convert argument to integer
    const programNumber: number = parseInt(args[0]);
    // Run main evaluator
    evaluator(programNumber);
}

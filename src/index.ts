// TODO: import day wise problems
import challenge01 from "./challenge-01-trebuchet/index.js";
import challenge02 from "./challenge-02-cube-conundrum/index.js";
import challenge03 from "./challenge-03-gear-ratios/index.js";

// TODO: run and evaluate them one by one
const evaluator: (challengeNumber: number) => void = async (
    challengeNumber
) => {
    // Define all functions
    const challengeFunctions: Function[] = [
        challenge01,
        challenge02,
        challenge03,
    ];
    // Run the function
    console.info(`[START]: Challenge ${challengeNumber.toPrecision(2)}`);
    const resultChallenge = await challengeFunctions[challengeNumber]();
    console.info(
        `\n[SOLUTION ${challengeNumber.toPrecision(2)}]: ${JSON.stringify(
            resultChallenge
        )}\n`
    );
    console.info(`[END]`);
    return;
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

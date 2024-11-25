// TODO: import day wise problems
import challenge01 from "./challenge-01-terbuchet/index.js";

// TODO: run and evaluate them one by one
const evaluator = async () => {
    // Challenge 01
    console.info(`[START]: Challenge 01`);
    const resultChallenge01 = await challenge01();
    console.info(`\n[SOLUTION 01]: ${JSON.stringify(resultChallenge01)}\n`);
    console.info(`[END]`);
};

evaluator();

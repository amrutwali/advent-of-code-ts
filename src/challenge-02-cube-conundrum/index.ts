import part01 from "./part-01/index.js";
import part02 from "./part-02/index.js";

export default async function challenge02() {
    console.info(`[->]: Part 01`);
    const resultPart1 = await part01();
    console.info(`[<-]: Part 01`);

    console.info(`[->]: Part 02`);
    const resultPart2 = await part02();
    console.info(`[<-]: Part 02`);

    return { part01: resultPart1, part02: resultPart2 };
}

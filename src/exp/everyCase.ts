import {BinaryNumber, EveryCase, EveryCaseReturnData, VariableValues} from "../../typings";
import checkPattern from "../utils/checkPattern";
import limit from "../utils/limit";
import vm from "../utils/vm";

/**
 *
 * @param pattern
 * the expression that will be evaluated
 * @return EveryCase
 */
export default (pattern: string) : EveryCase => {
    pattern = pattern.toLowerCase();

    const letters = "abcdefghijklmnopqrstuvwxyz";

    let exp: string[] = [];
    let res: BinaryNumber[] = [];
    let data : EveryCaseReturnData[] = [];

    const uniqueLetters: Set<string> = new Set();
    const uniqueVariables: Set<VariableValues> = new Set();

    pattern.split("").forEach(item => {
        if(letters.split("").includes(item)) uniqueLetters.add(item);
    })

    const numberOfRuns = 2 ** uniqueLetters.size;
    for(let i = 0; i < numberOfRuns; i++) {
        const binaryNumber = i.toString(2);
        const values = `${'0'.repeat(
            uniqueLetters.size - binaryNumber.length
        )}${binaryNumber}`.split("");

        let variablesToPass: VariableValues = {};
        let j = 0;

        values.forEach(item => {
            variablesToPass[[...uniqueLetters.values()][j]] = +item as BinaryNumber;
            j++
        })

        uniqueVariables.add(variablesToPass)
    }

    [...uniqueVariables.values()].forEach(item => {

        let expression = checkPattern(pattern, item);

        res.push(limit(vm.run(expression)));
        exp.push(expression);
    })

    for(let i = 0; i<numberOfRuns; i++) {
        let obj = [...uniqueVariables.values()][i]
        obj.res = res[i]

        data.push(obj as EveryCaseReturnData)
    }

    return {res, exp, data}
}

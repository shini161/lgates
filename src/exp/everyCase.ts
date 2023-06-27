import {limit} from "../utils/limit.js";
import {validatePattern} from "../utils/validatePattern.js";
import {EveryCaseObj} from "../../typings/index.js";

/**
 * Expression [EVERY/ALL]
 * @param {string} pattern Expression
 * @returns {EveryCaseObj} Object
 */
export function everyCase(pattern: string): EveryCaseObj {
	const LETTERS = "abcdefghijklmnopqrstuvwxyz";
	const obj: EveryCaseObj = {
		exp: [],
		res: [],
		data: []
	};
	const uniqueLetters: Set<string> = new Set(
		pattern.split("").filter(item => LETTERS.includes(item))
	);
	const uniqueVariables: Set<{ [key: string]: number }> = new Set();
	const numberOfRuns = 2 ** uniqueLetters.size;

	for (let i = 0; i < numberOfRuns; i++) {
		const binary = i.toString(2);
		const values = `${'0'.repeat(
			uniqueLetters.size - binary.length
		)}${binary}`.split("");

		uniqueVariables.add(values.reduce((acc, item, index) => {
			acc[[...uniqueLetters.values()][index] as string] = +item;
			return acc;
		}, {} as { [key: string]: number }));
	}

	uniqueVariables.forEach(item => {
		let exp = validatePattern(pattern, item);
		obj.res.push(limit(eval(exp)));
		obj.exp.push(exp);
	});

	for (let i = 0; i < numberOfRuns; i++) {
		obj.data.push(Object.assign(
			[...uniqueVariables.values()][i] as never,
			{res: obj.res[i] as number}
		));
	}

	return obj;
}

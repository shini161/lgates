import {validatePattern} from "../utils/validatePattern.js";
import {limit} from "../utils/limit.js";
import {SingleCaseObj} from "../../typings/index.js";

/**
 * Expression [SINGLE]
 * @param {string} pattern Expression
 * @param {object} args Variables
 * @returns {SingleCaseObj} Object
 */
export function singleCase(pattern: string, args?: { [key: string]: number }): SingleCaseObj {
	pattern = validatePattern(pattern, args);

	return {
		exp: pattern,
		res: limit(eval(pattern))
	}
}

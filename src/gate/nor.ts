import {not} from "./not.js";
import {or} from "./or.js";

/**
 * Logical NOR
 * @param {(number | boolean)[]} args Arguments
 * @returns {number} 0 or 1
 */
export function nor(...args: (number | boolean)[]): number {
	return not(or(...args));
}

import {not} from "./not.js";

/**
 * Logical XOR
 * @param {(number | boolean)[]} args Arguments
 * @returns {number} 0 or 1
 */
export function xor(...args: (number | boolean)[]): number {
	return +args.reduce((a, b) => (a || b) && not(a && b));
}

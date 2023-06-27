import {not} from "./not.js";
import {xor} from "./xor.js";

/**
 * Logical XNOR
 * @param {(number | boolean)[]} args Arguments
 * @returns {number} 0 or 1
 */
export function xnor(...args: (number | boolean)[]): number {
	return not(xor(...args));
}

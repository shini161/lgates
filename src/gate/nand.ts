import {not} from "./not.js";
import {and} from "./and.js";

/**
 * Logical NAND
 * @param {(number | boolean)[]} args Arguments
 * @returns {number} 0 or 1
 */
export function nand(...args: (number | boolean)[]): number {
	return not(and(...args));
}

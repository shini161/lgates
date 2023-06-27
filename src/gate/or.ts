/**
 * Logical OR
 * @param {(number | boolean)[]} args Arguments
 * @returns {number} 0 or 1
 */
export function or(...args: (number | boolean)[]): number {
	return +args.reduce((a, b) => a || b);
}

/**
 * @param {string} pattern Expression
 * @param {object} args Variables
 * @returns {string} Expression
 */
export function validatePattern(pattern: string, args: { [key: string]: number } = {}): string {
	const LETTERS = "abcdefghijklmnopqrstuvwxyz";

	pattern = pattern.toLowerCase()
		.replace(/[{[]/g, "(")
		.replace(/[}\]]/g, ")")
		.replace(/ |!?\(\)/g, "")
		.replace(/\)!/g, ")*!")
		.replace(/\*\+!/g, "*!")
		.replace(/\(\)/g, ")*(")
		.replace(/-\+|\+-/g, "-")

	pattern.split("").forEach((char, index) => {
		if (!LETTERS.concat("()!-+*10").includes(char))
			throw new Error(`LGATES: Invalid Pattern!\nExplanation: Pattern includes an invalid char "${char}" at index ${index}.\nPattern: "${pattern}"`);
	});

	Object.entries(args).forEach(([key, value]) => {
		if (value > 1 || value < 0) throw new Error(`LGATES: Invalid Pattern!\nExplanation: Pattern includes an invalid value "${value}" for variable "${key}".\nPattern: "${pattern}"`);
		pattern = pattern.replace(new RegExp(key, "g"), value.toString());
	})

	if (pattern.split("(").length !== pattern.split(")").length)
		throw new Error(`LGATES: Invalid Pattern!\nExplanation: Pattern includes non closed parenthesis.\nPattern: "${pattern}"`);

	pattern = pattern
		.replace(/!+/g, "!")
		.replace(/!(0|1)/g, "+!$1")
		.replace(/0+(?=1)/g, "$&*")
		.replace(/1(?=0)/g, "$&*")
		.replace(/([01])!/g, "$1*!")
		.replace(/\*+/g, "*")
		.replace(/\++/g, "+")
		.replace(/-+/g, "-")

	return pattern;
}

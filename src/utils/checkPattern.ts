import { BinaryNumber, VariableValues } from "../../typings";
import not from "../gates/not";

export default (pattern: string, variables: VariableValues): string => {
  pattern = pattern
    .replace(/ /g, "")
    .replace(/\(\)/g, "")
    .replace(/[{[]/g, "(")
    .replace(/[}\]]/g, ")")
    .replace(/\)!/g, ")*!")
    .replace(/\*+/g, "*")
    .replace(/-+/g, "-")
    .replace(/!+/, "!")
    .toLowerCase();

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const brackets = "()[]{}";
  const operators = "!+*";

  const validChars = letters.concat(brackets, operators).split("");

  const openBracketCount = pattern.split("(").length - 1;
  const closeBracketCount = pattern.split(")").length - 1;

  const binaryNumbers = [0, 1];

  if (pattern.split("").some((item) => !validChars.includes(item)))
    throw new Error("Invalid Pattern!");
  if (pattern.match(/^[*+]|[*+!]$/)) throw new Error("Invalid Pattern");
  if (openBracketCount !== closeBracketCount)
    throw new Error("Invalid Pattern");

  pattern = pattern.replace(/\)\(/g, ")*(");

  pattern.split("").forEach((item) => {
    if (letters.split("").includes(item)) {
      let value = variables?.[item] ? +variables?.[item] : 0;
      let regex = new RegExp(item, "g");
      pattern = pattern.replace(regex, String(value));
    }
  });

  let splittedArray = pattern.split("!");
  for (let i = 1; i < splittedArray.length; i++) {
    let number = splittedArray[i][0];
    splittedArray[i] = splittedArray[i].replace(
      number,
      String(not(+number as BinaryNumber))
    );
  }
  pattern = splittedArray.join("");

  pattern = pattern
    .replace(/\)0/g, ")*0")
    .replace(/0\(/g, "0*(")
    .replace(/\)1/g, ")*1")
    .replace(/1\(/g, "1*(");

  let array = pattern.split("");
  for (let i = 0; i < pattern.length; i++) {
    if (
      binaryNumbers.includes(+array[i]) &&
      binaryNumbers.includes(+array[i + 1])
    ) {
      if (array[i - 1] !== "(") {
        array.splice(i, 0, "(");
        for (let j = i + 1; j < array.length; j++) {
          if (!binaryNumbers.includes(+array[j])) {
            array.splice(j, 0, ")");
            break;
          }
        }
      }
    }
  }

  pattern = array
    .join("")
    .replace(/00/g, "0*0")
    .replace(/01/g, "0*1")
    .replace(/10/g, "1*0")
    .replace(/11/g, "1*1");

  return pattern;
};

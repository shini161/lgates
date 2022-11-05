"use strict";
exports.__esModule = true;
var not_1 = require("../gates/not");
exports["default"] = (function (pattern, variables) {
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
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var brackets = "()[]{}";
    var operators = "!+*";
    var validChars = letters.concat(brackets, operators).split("");
    var openBracketCount = pattern.split("(").length - 1;
    var closeBracketCount = pattern.split(")").length - 1;
    var binaryNumbers = [0, 1];
    if (pattern.split("").some(function (item) { return !validChars.includes(item); }))
        throw new Error("Invalid Pattern!");
    if (pattern.match(/^[*+]|[*+!]$/))
        throw new Error("Invalid Pattern");
    if (openBracketCount !== closeBracketCount)
        throw new Error("Invalid Pattern");
    pattern = pattern.replace(/\)\(/g, ")*(");
    pattern.split("").forEach(function (item) {
        if (letters.split("").includes(item)) {
            var value = (variables === null || variables === void 0 ? void 0 : variables[item]) ? +(variables === null || variables === void 0 ? void 0 : variables[item]) : 0;
            var regex = new RegExp(item, "g");
            pattern = pattern.replace(regex, String(value));
        }
    });
    var splittedArray = pattern.split("!");
    for (var i = 1; i < splittedArray.length; i++) {
        var number = splittedArray[i][0];
        splittedArray[i] = splittedArray[i].replace(number, String((0, not_1["default"])(+number)));
    }
    pattern = splittedArray.join("");
    pattern = pattern
        .replace(/\)0/g, ")*0")
        .replace(/0\(/g, "0*(")
        .replace(/\)1/g, ")*1")
        .replace(/1\(/g, "1*(");
    var array = pattern.split("");
    for (var i = 0; i < pattern.length; i++) {
        if (binaryNumbers.includes(+array[i]) &&
            binaryNumbers.includes(+array[i + 1])) {
            if (array[i - 1] !== "(") {
                array.splice(i, 0, "(");
                for (var j = i + 1; j < array.length; j++) {
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
});

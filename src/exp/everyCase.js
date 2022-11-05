"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var checkPattern_1 = require("../utils/checkPattern");
var limit_1 = require("../utils/limit");
var vm_1 = require("../utils/vm");
/**
 *
 * @param pattern
 * the expression that will be evaluated
 * @return EveryCase
 */
exports["default"] = (function (pattern) {
    pattern = pattern.toLowerCase();
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var exp = [];
    var res = [];
    var data = [];
    var uniqueLetters = new Set();
    var uniqueVariables = new Set();
    pattern.split("").forEach(function (item) {
        if (letters.split("").includes(item))
            uniqueLetters.add(item);
    });
    var numberOfRuns = Math.pow(2, uniqueLetters.size);
    var _loop_1 = function (i) {
        var binaryNumber = i.toString(2);
        var values = "".concat('0'.repeat(uniqueLetters.size - binaryNumber.length)).concat(binaryNumber).split("");
        var variablesToPass = {};
        var j = 0;
        values.forEach((function (item) {
            variablesToPass[__spreadArray([], uniqueLetters.values(), true)[j]] = +item;
            j++;
        }));
        uniqueVariables.add(variablesToPass);
    };
    for (var i = 0; i < numberOfRuns; i++) {
        _loop_1(i);
    }
    __spreadArray([], uniqueVariables.values(), true).forEach(function (item) {
        var expression = (0, checkPattern_1["default"])(pattern, item);
        res.push((0, limit_1["default"])(vm_1["default"].run(expression)));
        exp.push(expression);
    });
    for (var i = 0; i < numberOfRuns; i++) {
        var obj = __spreadArray([], uniqueVariables.values(), true)[i];
        obj.res = res[i];
        data.push(obj);
    }
    return { res: res, exp: exp, data: data };
});

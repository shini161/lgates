"use strict";
exports.__esModule = true;
var limit_1 = require("../utils/limit");
var checkPattern_1 = require("../utils/checkPattern");
var vm_1 = require("../utils/vm");
/**
 *
 * @param pattern
 * the expression to evaluate
 * @param variables
 * an object of variable values
 * @return SingleCase
 */
exports["default"] = (function (pattern, variables) {
    pattern = (0, checkPattern_1["default"])(pattern, variables);
    return {
        exp: pattern,
        res: (0, limit_1["default"])(vm_1["default"].run(pattern))
    };
});

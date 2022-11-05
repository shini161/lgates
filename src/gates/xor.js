"use strict";
exports.__esModule = true;
var not_1 = require("./not");
/**
 *
 * @param args
 * gate arguments
 * @return BinaryNumber
 */
exports["default"] = (function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return +args.reduce(function (a, b) { return (a || b) && (0, not_1["default"])(a && b); });
});

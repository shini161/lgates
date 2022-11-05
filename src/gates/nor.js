"use strict";
exports.__esModule = true;
var not_1 = require("./not");
var or_1 = require("./or");
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
    return (0, not_1["default"])(or_1["default"].apply(void 0, args));
});

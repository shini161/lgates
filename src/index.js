"use strict";
exports.__esModule = true;
exports.everyCase = exports.singleCase = exports.xor = exports.xnor = exports.or = exports.not = exports.nor = exports.nand = exports.buffer = exports.and = exports.exp = exports.gate = void 0;
var and_1 = require("./gates/and");
exports.and = and_1["default"];
var buffer_1 = require("./gates/buffer");
exports.buffer = buffer_1["default"];
var nand_1 = require("./gates/nand");
exports.nand = nand_1["default"];
var nor_1 = require("./gates/nor");
exports.nor = nor_1["default"];
var not_1 = require("./gates/not");
exports.not = not_1["default"];
var or_1 = require("./gates/or");
exports.or = or_1["default"];
var xnor_1 = require("./gates/xnor");
exports.xnor = xnor_1["default"];
var xor_1 = require("./gates/xor");
exports.xor = xor_1["default"];
var singleCase_1 = require("./exp/singleCase");
exports.singleCase = singleCase_1["default"];
var everyCase_1 = require("./exp/everyCase");
exports.everyCase = everyCase_1["default"];
var gate = {
    and: and_1["default"],
    buffer: buffer_1["default"],
    nand: nand_1["default"],
    nor: nor_1["default"],
    not: not_1["default"],
    or: or_1["default"],
    xnor: xnor_1["default"],
    xor: xor_1["default"],
    singleCase: singleCase_1["default"],
    everyCase: everyCase_1["default"]
};
exports.gate = gate;
var exp = {
    singleCase: singleCase_1["default"],
    everyCase: everyCase_1["default"]
};
exports.exp = exp;
var lg = {
    gate: gate,
    exp: exp
};
exports["default"] = lg;

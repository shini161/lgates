import and from "./gates/and";
import buffer from "./gates/buffer";
import nand from "./gates/nand";
import nor from "./gates/nor";
import not from "./gates/not";
import or from "./gates/or";
import xnor from "./gates/xnor";
import xor from "./gates/xor";
import singleCase from "./exp/singleCase";
import everyCase from "./exp/everyCase";

const gate = {
  and: and,
  buffer: buffer,
  nand: nand,
  nor: nor,
  not: not,
  or: or,
  xnor: xnor,
  xor: xor,
  singleCase: singleCase,
  everyCase: everyCase,
};

const exp = {
  singleCase: singleCase,
  everyCase: everyCase,
};

export {
  gate,
  exp,
  and,
  buffer,
  nand,
  nor,
  not,
  or,
  xnor,
  xor,
  singleCase,
  everyCase,
};

export default {
  gate,
  exp,
};

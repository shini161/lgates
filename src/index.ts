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

const exp = {
  singleCase,
  everyCase,
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

const lg = {
  gate,
  exp,
};

export default lg

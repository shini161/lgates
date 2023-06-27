import {and} from "./gate/and.js";
import {buffer} from "./gate/buffer.js";
import {nand} from "./gate/nand.js";
import {nor} from "./gate/nor.js";
import {not} from "./gate/not.js";
import {or} from "./gate/or.js";
import {xnor} from "./gate/xnor.js";
import {xor} from "./gate/xor.js";
import {singleCase} from "./exp/singleCase.js";
import {everyCase} from "./exp/everyCase.js";

const gate = {
	and,
	buffer,
	nand,
	nor,
	not,
	or,
	xnor,
	xor
};
const exp = {
	singleCase,
	everyCase
};
const lg = {
	gate,
	exp,
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
	everyCase
}

export default lg;

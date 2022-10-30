import {BinaryNumber, BoolBinary} from "../../typings";
import not from "./not";
import xor from "./xor";

export default (...args: BoolBinary[]): BinaryNumber => {
    return not(xor(...args));
}

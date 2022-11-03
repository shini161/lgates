import {BinaryNumber, BoolBinary} from "../../typings";
import not from "./not";
import xor from "./xor";

/**
 *
 * @param args
 * gate arguments
 * @return BinaryNumber
 */
export default (...args: BoolBinary[]): BinaryNumber => {
    return not(xor(...args));
}

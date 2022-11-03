import {BinaryNumber, BoolBinary} from "../../typings";
import not from "./not";
import and from "./and";

/**
 *
 * @param args
 * gate arguments
 * @return BinaryNumber
 */
export default (...args: BoolBinary[]): BinaryNumber => {
    return not(and(...args));
}
import {BinaryNumber, BoolBinary} from "../../typings";
import not from "./not";
import or from "./or";

/**
 *
 * @param args
 * gate arguments
 * @return BinaryNumber
 */
export default (...args: BoolBinary[]): BinaryNumber => {
    return not(or(...args));
}
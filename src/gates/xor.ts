import {BinaryNumber, BoolBinary} from "../../typings";
import not from "./not";

/**
 *
 * @param args
 * gate arguments
 * @return BinaryNumber
 */
export default (...args: BoolBinary[]): BinaryNumber => {
    return +args.reduce((a, b) => (a || b) && not(a && b)) as BinaryNumber
}
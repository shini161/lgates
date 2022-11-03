import {BinaryNumber, BoolBinary} from "../../typings";

/**
 *
 * @param args
 * gate arguments
 * @return BinaryNumber
 */
export default (...args: BoolBinary[]): BinaryNumber => {
    return +args.reduce((a, b) => a && b) as BinaryNumber;
}
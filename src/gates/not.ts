import {BinaryNumber, BoolBinary} from "../../typings";

/**
 *
 * @param number
 * gate argument
 * @return BinaryNumber
 */
export default (number: BoolBinary): BinaryNumber => {
    return +!number as BinaryNumber;
}
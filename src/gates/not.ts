import {BinaryNumber, BoolBinary} from "../../typings";

export default (number: BoolBinary): BinaryNumber => {
    return +!number as BinaryNumber;
}
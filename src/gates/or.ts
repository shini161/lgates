import {BinaryNumber, BoolBinary} from "../../typings";

export default (...args: BoolBinary[]): BinaryNumber => {
    return +args.reduce((a, b) => a || b) as BinaryNumber
}
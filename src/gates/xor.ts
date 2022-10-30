import {BinaryNumber, BoolBinary} from "../../typings";
import not from "./not";

export default (...args: BoolBinary[]): BinaryNumber => {
    return +args.reduce((a, b) => (a || b) && not(a && b)) as BinaryNumber
}
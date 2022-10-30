import {BinaryNumber, BoolBinary} from "../../typings";
import not from "./not";
import or from "./or";

export default (...args: BoolBinary[]): BinaryNumber => {
    return not(or(...args));
}
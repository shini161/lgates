import {BinaryNumber, BoolBinary} from "../../typings";
import not from "./not";
import and from "./and";

export default (...args: BoolBinary[]): BinaryNumber => {
    return not(and(...args));
}
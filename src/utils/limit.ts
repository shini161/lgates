import {BinaryNumber} from "../../typings";

export default (number: number): BinaryNumber => {
    return +!!number as BinaryNumber
};

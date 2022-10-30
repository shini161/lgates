export type BinaryNumber = 0 | 1;

export type BoolBinary = BinaryNumber | boolean;

export type VariableValues = { [key: string]: BinaryNumber };

export type EveryCaseReturnData = { [key: string]: BinaryNumber; res: BinaryNumber }

export interface SingleCase {
    exp: string;
    res: BinaryNumber
}

export interface EveryCase {
    exp: string[];
    res: BinaryNumber[];
    data: EveryCaseReturnData[]
}
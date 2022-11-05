export type BinaryNumber = 0 | 1;

export type BoolBinary = BinaryNumber | boolean;

export type VariableValues = { [key: string]: BoolBinary };

export type EveryCaseReturnData = {
  [key: string]: BinaryNumber;
  res: BinaryNumber;
};

export interface SingleCase {
  exp: string;
  res: BinaryNumber;
}

export interface EveryCase {
  exp: string[];
  res: BinaryNumber[];
  data: EveryCaseReturnData[];
}

declare function everyCase(pattern: string): EveryCase;

declare function singleCase(
  pattern: string,
  variables?: VariableValues
): SingleCase;

declare function and(...args: BoolBinary[]): BinaryNumber;

declare function buffer(number: BoolBinary): BinaryNumber;

declare function nand(...args: BoolBinary[]): BinaryNumber;

declare function nor(...args: BoolBinary[]): BinaryNumber;

declare function not(number: BoolBinary): BinaryNumber;

declare function or(...args: BoolBinary[]): BinaryNumber;

declare function xnor(...args: BoolBinary[]): BinaryNumber;

declare function xor(...args: BoolBinary[]): BinaryNumber;

declare function checkPattern(
  pattern: string,
  variables: VariableValues
): string;

declare function limit(number: number): BinaryNumber;

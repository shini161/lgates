import {gate} from "../src";

// Logical AND
console.log(gate.and(1, 1)); // 1
console.log(gate.and(true, 1, false)); // 0

// Logical Buffer
console.log(gate.buffer(1)); // 1
console.log(gate.buffer(false)); // 0

// Logical NAND
console.log(gate.nand(1, 1)); // 0
console.log(gate.nand(true, 1, false)); // 1

// Logical NOR
console.log(gate.nor(1, 1)); // 0
console.log(gate.nor(true, 1, false)); // 0

// Logical NOT
console.log(gate.not(1)); // 0
console.log(gate.not(true)); // 0

// Logical OR
console.log(gate.or(1, 1)); // 1
console.log(gate.or(true, 1, false)); // 1

// Logical XNOR
console.log(gate.xnor(1, 1)); // 1
console.log(gate.xnor(true, 1, false)); // 0

// Logical XOR
console.log(gate.xor(1, 1)); // 0
console.log(gate.xor(true, 1, false)); // 1

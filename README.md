
# Logic Gates as Functions & Expressions
Logic Gates (AND, BUFFER, NAND, NOR, NOT, OR, XNOR, XOR) made available as simple functions and Expressions (Cool feature of this package).

Gates also support both Boolean and number values, here's an example:

```typescript
import lg from "lgates";

lg.gate.and(true, 1, false);
// Gates will always return a number
```
 It is also possible to import every expression or gate individually:
```typescript
import {gate, exp, and, singleCase} from "lgates";

// Gate Examples
gate.and(true, 0); // 0
and(true, 0) // 0

// Expression Examples
exp.singleCase("AB+!B", {a: 1, b: 0}).res // 1
singleCase("AB+!B", {a:1, b:0}).res // 1
```

## Install
```bash
$ npm install lgates
```

## Usage

```typescript
import lg from "lgates";

// Gates
const and = lg.gate.and(true, 1);
const buffer = lg.gate.buffer(true);
const nand = lg.gate(true, 1);
const nor = lg.gate.nor(true, 1);
const not = lg.gate.not(true);
const or = lg.gate.or(true, 1);
const xnor = lg.gate.xnor(true, 1);
const xor = lg.gate.xor(true, 1);
```

## Expressions
```typescript
import lg from "lgates";

// Allowed operators: +, *, !
// Brackets are allowed ()[]{}

const pattern = "AB+!B";
const x = lg.exp.singleCase(pattern, {a: 1});
// Non specified variables are 0 by default
const y = lg.exp.everyCase(pattern);

console.log(x.res); // 1
console.log(x.exp); // (1*0)+1

// calculates every possible case with provided pattern
console.log(y.res); // number[]
console.log(y.exp); // string[]
console.log(y.data); // data[] => {variables + res}[]
```
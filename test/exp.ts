import {exp} from "../src";

// Single Case
console.log(exp.singleCase("!A+b(C)(A+!B)"), {a: 1, c: 0});

// Every Case
console.log(exp.everyCase("!A+b(C)(A+!B)"));

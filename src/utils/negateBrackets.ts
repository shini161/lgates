import vm from "./vm";

export default (pattern: string): string => {
    let repArr = ["!", "("];
    let counter = 0;
    let afterNegate = pattern.split(/!\((.*)/s);
    afterNegate.shift();

    for(let i = 0; i < afterNegate.length; i++) {
        repArr.push(afterNegate[i]);
        if(afterNegate[i] === "(") counter += 1;
        if(afterNegate[i] === ")") {
            if(counter === 0) break;
            counter -= 1;
        }
    }

    let rep = repArr.join("");
    repArr.shift();

    return pattern.replace(rep, String(+!vm.run(repArr.join(""))));
}
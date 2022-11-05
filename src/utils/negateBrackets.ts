import vm from "./vm";

export default (pattern: string): string => {
    let repArr = ["!", "("];
    let counter = 0;
    let afterNegate = pattern.split(/!\((.*)/s);
    afterNegate.shift();
    let splittedArr = afterNegate.join("").split("")
    for(let i = 0; i < splittedArr.length; i++) {
        repArr.push(splittedArr[i]);
        if(splittedArr[i] === "(") counter++;
        if(splittedArr[i] === ")") {
            if(!counter) break;
            counter--;
        }
    }

    let rep = repArr.join("");
    repArr.shift();

    return pattern.replace(rep, String(+!vm.run(repArr.join(""))));
}
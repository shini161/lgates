import { SingleCase, VariableValues } from "../../typings";
import limit from "../utils/limit";
import checkPattern from "../utils/checkPattern";
import vm from "../utils/vm";

/**
 *
 * @param pattern
 * the expression to evaluate
 * @param variables
 * an object of variable values
 * @return SingleCase
 */
export default (pattern: string, variables?: VariableValues): SingleCase => {
  pattern = checkPattern(pattern, variables);

  return {
    exp: pattern,
    res: limit(vm.run(pattern)),
  };
};

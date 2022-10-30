import { SingleCase, VariableValues } from "../../typings";
import limit from "../utils/limit";
import checkPattern from "../utils/checkPattern";

export default (pattern: string, variables?: VariableValues): SingleCase => {
  pattern = checkPattern(pattern, variables);

  return {
    exp: pattern,
    res: limit(eval(pattern)),
  };
};

import * as fs from "fs";
import { ICheckItem } from "../types";

export const checkRules = {
  LINK_REGEXP: /https{0,1}:\/\/.*/,
  IS_VALID_PATH: {
    test: (str: string) => {
      return str.startsWith("http") || fs.existsSync(str);
    },
  },
  NAME: /^.{1,15}$/,
  SAVE_INT_NUM: /^\d{1,10000}$/,
};

export const check = ({ rules, target, msg }: ICheckItem) => {
  rules.forEach((regexp) => {
    if (!regexp.test(target.toString())) {
      throw Error(msg);
    }
  });
};

export const patchCheck = (items: ICheckItem[]) => items.forEach(check);

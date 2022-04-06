import { Command, Flags } from "@oclif/core";
import cli from "cli-ux";
import { check, checkRules } from "../../utils";
import { showList } from "../../utils/db";
import * as clc from "cli-color";
import { IItem } from "../../types/index.js";

export default class Ls extends Command {
  static description = "打印数据";

  static examples = [`$ sys ls [-c n]`];

  static flags = {
    count: Flags.string({
      char: "c",
      description: "显示记录的数量,整数且别太大",
      required: false,
    }),
  };

  async run(): Promise<void> {
    const {
      flags: { count = Number.MAX_SAFE_INTEGER },
    } = await this.parse(Ls);
    check({
      rules: [checkRules.SAVE_INT_NUM],
      target: count,
      msg: "数量必须是整数",
    });
    const list = showList(+count);
    // 打印数据
    const columns = {
      标记: {
        get: (item: IItem) => clc.bgWhite.black(` ${item.name} `),
      },
      介绍: {
        get: (item: IItem) => clc.green(` ${item.description} `),
      },
      链接: {
        get: (item: IItem) => clc.yellow(` ${item.link} `),
      },
    };
    cli.table(list, columns);
  }
  async catch(err: Error) {
    this.log(err.message);
  }
}

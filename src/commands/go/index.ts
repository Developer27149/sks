import { Command } from "@oclif/core";
import { patchCheck, checkRules } from "../../utils";
import { getItem } from "../../utils/db";

export default class Go extends Command {
  static description = "打开目标";

  static examples = ["$ sks go [-l list] name"];

  static args = [
    { name: "name", description: "简明好记的标志", required: true },
  ];

  async run(): Promise<void> {
    const { args } = await this.parse(Go);
    const { name } = args;
    /**
     * 检查输入是否合规
     */
    patchCheck([
      { target: name, rules: [checkRules.NAME], msg: "没有这么长的标志" },
    ]);
    /**
     * 写入数据库
     */
    getItem(name);
  }

  async catch(err: Error) {
    this.log(err.message);
  }
}

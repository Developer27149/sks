import { Command, Flags } from "@oclif/core";
import * as clc from "cli-color";
import { patchCheck, checkRules } from "../../utils";
import { writeItem } from "../../utils/db";

export default class Add extends Command {
  static description = "添加快捷方式";

  static examples = ["$ sks add name link"];
  static flags = {
    description: Flags.string({
      char: "d",
      description: "简介",
      required: true,
    }),
  };

  static args = [
    { name: "name", description: "简明好记的标志", required: true },
    { name: "link", description: "目标地址", required: true },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Add);
    const { description } = flags;
    const { name, link } = args;
    /**
     * 检查输入是否合规
     */
    patchCheck([
      { target: name, rules: [checkRules.NAME], msg: "标志也太长了吧" },
      {
        target: link,
        rules: [checkRules.LINK_REGEXP, checkRules.IS_VALID_PATH as RegExp],
        msg: `看不懂的目标地址: ${clc.red(link)}`,
      },
    ]);
    /**
     * 写入数据库
     */
    writeItem({ name, link, description });
  }

  async catch(err: Error) {
    this.log(err.message);
  }
}

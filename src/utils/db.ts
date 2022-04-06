import { join } from "path";
import { env } from "process";
import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
import { ICheckItem } from "../types";
import * as CMD from "child_process";

const file = join(env.HOME ?? ".", ".sks_db.json");
const db = new JsonDB(new Config(file, true, false));

export const getItem = (name: string): ICheckItem | undefined => {
  try {
    const res = db.getData("/" + name);
    if (!!res) {
      CMD.exec(`open ${res.link}`);
      return res;
    }
  } catch (error) {
    throw Error("没有找到记录");
  }
};
export const writeItem = ({
  name,
  link,
  description,
}: {
  name: string;
  link: string;
  description: string;
}) => {
  try {
    db.push(`/${name}`, { link, description }, true);
    console.log("🎉🎉🎉");
  } catch (error) {}
};

export const showList = (num: number) => {
  const res = db.getData("/");
  return Object.keys(res)
    .map((key) => ({ ...res[key], name: key }))
    .slice(0, num);
};

export const deleteItem = (name: string) => db.delete(`/${name}`);

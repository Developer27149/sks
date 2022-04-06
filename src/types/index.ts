export interface ICheckItem {
  target: string | number;
  rules: RegExp[];
  msg: string;
}

export interface IItem {
  name: string;
  link: string;
  description: string;
}

import { atom } from "jotai";

export interface IUserEditForm {
  id: number;
  name: string;
  password: string;
}

const defaultPerson = {
  id: 0,
  name: "",
  password: "",
};

export const tempUserInfoAtom = atom<IUserEditForm[]>([defaultPerson]);

export const userInfoShow = atom(false);

export const userInfoAtom = atom<IUserEditForm[]>([]);

import { atom } from "jotai";

const defaultPerson = {
  id: 0,
  name: "",
  password: "",
};

export const userInfoAtom = atom([defaultPerson]);

export const userInfoShow = atom(false);

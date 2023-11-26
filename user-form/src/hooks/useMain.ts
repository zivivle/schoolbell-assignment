import { useAtomValue } from "jotai";
import { tempUserInfoAtom, userInfoShow } from "../store/UserForm.atoms";
export const useMain = () => {
  const userInfo = useAtomValue(tempUserInfoAtom);
  const userInfoList = useAtomValue(userInfoShow);

  return {
    userInfo,
    userInfoList,
  };
};

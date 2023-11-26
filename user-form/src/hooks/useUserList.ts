import { useAtomValue } from "jotai";
import { userInfoAtom } from "../store/UserForm.atoms";

export const useUserList = () => {
  const userInfo = useAtomValue(userInfoAtom);
  const filteredUserInfo = userInfo.filter(
    (userData) => userData.name !== "" && userData.password !== ""
  );

  return {
    filteredUserInfo,
  };
};

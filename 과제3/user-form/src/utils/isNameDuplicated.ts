import { IUserEditForm } from "../store/UserForm.atoms";

export const isNameDuplicated = (
  users: IUserEditForm[],
  user: { name: string; id: number }
) => {
  return users.some(
    (otherUser) => otherUser.name === user.name && otherUser.id !== user.id
  );
};

export interface IUserEditForm {
  userData: {
    id: number;
    name: string;
    password: string;
    nameValid: boolean;
    passwordValid: boolean;
  };
}

export interface IUserFormInfoValue {
  name: string;
  password: string;
}

//ACTION TYPE
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

//ACTION CREATOR
export const doRegister = (email: string, password: string, username: string) => ({
  type: REGISTER,
  email,
  password,
  username,
});

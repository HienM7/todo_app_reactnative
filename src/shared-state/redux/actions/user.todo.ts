//ACTION TYPE

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";


//ACTION CREATOR

export const doRegister = (email: any, password: any, username: any) => ({
  type: REGISTER,
  email,
  password,
  username,
});

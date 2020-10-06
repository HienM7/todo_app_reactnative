export const DO_LOGIN = "GET_LOGIN";
export const DO_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const DO_LOGIN_FAIL = " GET_LOGIN_FAIL";

export const doLogin = (email: any, password: any) => ({
    type: DO_LOGIN,
    email,
    password,
});
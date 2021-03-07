import { IS_LOGIN, SUCCESS_LOGIN, TRY_LOGIN, SAVE_USER_DATA, SIGN_UP_USER, LOG_OUT_USER, GET_USERNOW_GROUP } from './constants'


export const isLogin = () => {
  return { type : IS_LOGIN }
}

export const tryLogin = (data: object) => {
  return { type : TRY_LOGIN, data: data }
}

export const successLogin = () => {
  return { type : SUCCESS_LOGIN }
}

export const logoutUser = () => {
  return { type : LOG_OUT_USER }
}

export const saveUserData = (data: object) => {
  return { type : SAVE_USER_DATA, data : data }
}

export const signUpUser = (data: object) => {
  return { type : SIGN_UP_USER, data : data}
}

export const getUserNowGroup = (data : Array<object>) => {
  return { type : GET_USERNOW_GROUP, data}
}


export type UserAction = | ReturnType<typeof isLogin> | ReturnType<typeof successLogin> | ReturnType<typeof tryLogin> | ReturnType<typeof saveUserData> | ReturnType<typeof logoutUser> | ReturnType<typeof getUserNowGroup>
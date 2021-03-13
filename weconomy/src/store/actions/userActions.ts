import { IS_LOGIN, SUCCESS_LOGIN, TRY_LOGIN, SAVE_USER_DATA, SIGN_UP_USER, LOG_OUT_USER, GET_USERNOW_GROUP, GET_USER_DATA_AGAIN ,SIGN_OUT_USER, TRY_GOOGLE_LOGIN, SAVE_USER_GOOGLE } from './constants'


export const isLogin = () => {
  return { type : IS_LOGIN }
}

export const tryLogin = (data: object) => {
  return { type : TRY_LOGIN, data: data }
}

export const tryGoogleLogin = (data: object) => {
  return { type : TRY_GOOGLE_LOGIN, data }
}

export const saveUserGoogle = (data: object) => {
  return { type : SAVE_USER_GOOGLE, data }
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

export const getUserDataAgain = (userId : number) => {
  return { type : GET_USER_DATA_AGAIN, userId}
}

export const signOutUser = (userId : number) => {
  return { type : SIGN_OUT_USER, userId }
}


export type UserAction = | ReturnType<typeof isLogin> | ReturnType<typeof successLogin> | ReturnType<typeof tryLogin> | ReturnType<typeof saveUserData> | ReturnType<typeof logoutUser> | ReturnType<typeof getUserNowGroup> | ReturnType<typeof getUserDataAgain> | ReturnType<typeof signOutUser> | ReturnType<typeof saveUserGoogle> | ReturnType<typeof tryGoogleLogin>
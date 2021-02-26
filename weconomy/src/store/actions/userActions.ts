import { IS_LOGIN, SUCCESS_LOGIN, TRY_LOGIN, SAVE_TOKEN, SAVE_USER_DATA } from './constants'

interface types {
  type: typeof SAVE_TOKEN,
  payload : {
    token: string
  }
}

export const isLogin = () => {
  return { type : IS_LOGIN }
}

export const tryLogin = (data: object) => {
  return { type : TRY_LOGIN, data: data }
}

export const successLogin = () => {
  return { type : SUCCESS_LOGIN }
}

export const saveUserData = (data: object) => {
  return { type : SAVE_USER_DATA, data : data }
}


export const saveToken = (token: string): types => {
  return { 
    type : SAVE_TOKEN, 
    payload : {
      token
    }
  }
}


export type UserAction = | ReturnType<typeof isLogin> | ReturnType<typeof successLogin> | ReturnType<typeof tryLogin> | ReturnType<typeof saveToken> | ReturnType<typeof saveUserData>
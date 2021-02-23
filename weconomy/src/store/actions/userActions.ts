import { IS_LOGIN, SUCCESS_LOGIN } from './constants'

export const isLogin = () => {
  return { type : IS_LOGIN }
}

export const successLogin = () => {
  return { type : SUCCESS_LOGIN }
}


export type UserAction = | ReturnType<typeof isLogin> | ReturnType<typeof successLogin>;
import { IS_LOGIN } from './constants'

export const isLogin = () => {
  return { type : IS_LOGIN }
}


export type UserAction = | ReturnType<typeof isLogin>;
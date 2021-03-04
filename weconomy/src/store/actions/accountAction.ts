import { CREATE_NEW_ACCOUNT } from './constants'


export const createNewAccount = (data: object) => {
  return { type : CREATE_NEW_ACCOUNT, data}
}


export type AccountAction = | ReturnType<typeof createNewAccount>
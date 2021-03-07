import { ADD_MEMEBER_WORKER_START, UPDATE_GROUP_TOTAL_COST, DELETE_ACCOUNT } from './constants'

interface data {
  userId : number,
  groupId : number,
  email : string,
}

interface updateTotalcost {
  userId : number,
  groupId : number,
  totalcost : string
}

interface deleteAccountType {
  meetId : number,
  userId : number 
}

export const addMemberWorkerStart = (data : data) => {
  return { type : ADD_MEMEBER_WORKER_START, data}
}

export const updateGroupTotalcost = (data : updateTotalcost) => {
  return { type : UPDATE_GROUP_TOTAL_COST, data}
}

export const deleteAccount = (data : deleteAccountType) => {
  return { type : DELETE_ACCOUNT, data}
}

export type GroupAction = | ReturnType<typeof addMemberWorkerStart> | ReturnType<typeof updateGroupTotalcost> | ReturnType<typeof deleteAccount>
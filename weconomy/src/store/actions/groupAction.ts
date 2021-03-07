import { ADD_MEMEBER_WORKER_START, UPDATE_GROUP_TOTAL_COST } from './constants'

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

export const addMemberWorkerStart = (data : data) => {
  return { type : ADD_MEMEBER_WORKER_START, data}
}

export const updateGroupTotalcost = (data : updateTotalcost) => {
  return { type : UPDATE_GROUP_TOTAL_COST, data}
}

export type GroupAction = | ReturnType<typeof addMemberWorkerStart> | ReturnType<typeof updateGroupTotalcost>
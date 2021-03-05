import { ADD_MEMEBER_WORKER_START } from './constants'

interface data {
  userId : number,
  groupId : number,
  email : string,
}

export const addMemberWorkerStart = (data : data) => {
  return { type : ADD_MEMEBER_WORKER_START, data}
}

export type GroupAction = | ReturnType<typeof addMemberWorkerStart>
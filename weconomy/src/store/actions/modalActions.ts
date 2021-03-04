import { IS_LOGIN_MODAL_OPEN, LOGIN_MODAL_OPEN, LOGIN_MODAL_CLOSE, REQUEST_LOGIN_MODAL_OPEN, REQUEST_LOGIN_MODAL_CLOSE, ASK_NONE_SAVE_MODAL_OPEN, ASK_NONE_SAVE_MODAL_CLOSE, CREATE_ERROR_MODAL_OPEN, CREATE_ERROR_MODAL_CLOSE, CREATE_SUCCESS_MODAL_OPEN, CREATE_SUCCESS_MODAL_CLOSE, CREATE_NEW_ACCOUNT_MODAL_OPEN, CREATE_NEW_ACCOUNT_MODAL_CLOSE } from './constants'

export const isLoginModalOpen = () => {
  return { type : IS_LOGIN_MODAL_OPEN }
}

export const loginModalOpen = () => {
  return { type : LOGIN_MODAL_OPEN }
}

export const loginModalClose = () => {
  return { type : LOGIN_MODAL_CLOSE }
}

export const requestLoginModalOpen = () => {
  return { type : REQUEST_LOGIN_MODAL_OPEN }
}

export const requestLoginModalClose = () => {
  return { type : REQUEST_LOGIN_MODAL_CLOSE }
}

export const askNoneSaveModalOpen = () => {
  return { type : ASK_NONE_SAVE_MODAL_OPEN }
}

export const askNoneSaveModalClose = () => {
  return { type : ASK_NONE_SAVE_MODAL_CLOSE }
}

export const createErrorModalOpen = (message:string) => {
  return { type : CREATE_ERROR_MODAL_OPEN, message}
}

export const createErrorModalClose = () => {
  return { type : CREATE_ERROR_MODAL_CLOSE }
}

export const createSuccessModalOpen = () => {
  return { type : CREATE_SUCCESS_MODAL_OPEN }
}

export const createSuccessModalClose = () => {
  return { type : CREATE_SUCCESS_MODAL_CLOSE }
}

export const createNewAccountModalOpen = () => {
  return { type : CREATE_NEW_ACCOUNT_MODAL_OPEN }
}

export const createNewAccountModalClose = () => {
  return { type : CREATE_NEW_ACCOUNT_MODAL_CLOSE }
}



export type ModalAction = | ReturnType<typeof isLoginModalOpen> | ReturnType<typeof loginModalOpen> | ReturnType<typeof loginModalClose> | ReturnType<typeof requestLoginModalOpen> | ReturnType<typeof requestLoginModalClose> | ReturnType<typeof askNoneSaveModalOpen> | ReturnType<typeof askNoneSaveModalClose> | ReturnType<typeof createErrorModalOpen> | ReturnType<typeof createErrorModalClose> | ReturnType<typeof createSuccessModalOpen> | ReturnType<typeof createSuccessModalClose> | ReturnType<typeof createNewAccountModalOpen> | ReturnType<typeof createSuccessModalClose>
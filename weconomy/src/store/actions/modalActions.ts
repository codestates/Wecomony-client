import { IS_LOGIN_MODAL_OPEN, LOGIN_MODAL_OPEN, LOGIN_MODAL_CLOSE, REQUEST_LOGIN_MODAL_OPEN, REQUEST_LOGIN_MODAL_CLOSE } from './constants'

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


export type ModalAction = | ReturnType<typeof isLoginModalOpen> | ReturnType<typeof loginModalOpen> | ReturnType<typeof loginModalClose> | ReturnType<typeof requestLoginModalOpen> | ReturnType<typeof requestLoginModalClose> 
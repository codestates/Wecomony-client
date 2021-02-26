import { LOGIN_MODAL_OPEN, LOGIN_MODAL_CLOSE, REQUEST_LOGIN_MODAL_OPEN, REQUEST_LOGIN_MODAL_CLOSE } from '../actions/constants'
import { ModalAction } from '../actions/modalActions'


const initialState = {
  isLoginModalOpen : false,
  requestLoginModal : false
}

const modalReducer = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case LOGIN_MODAL_OPEN : 
      return {
        ...state,
        isLoginModalOpen : true
      }
    case LOGIN_MODAL_CLOSE : 
      return {
        ...state,
        isLoginModalOpen : false
      }
    case REQUEST_LOGIN_MODAL_OPEN :
      return {
        ...state,
        requestLoginModal : true
      }
    case REQUEST_LOGIN_MODAL_CLOSE :
      return {
        ...state,
        requestLoginModal : false
      }
      default:
        return state
  }
}

export default modalReducer
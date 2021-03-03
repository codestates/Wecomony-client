import { LOGIN_MODAL_OPEN, LOGIN_MODAL_CLOSE, REQUEST_LOGIN_MODAL_OPEN, REQUEST_LOGIN_MODAL_CLOSE, ASK_NONE_SAVE_MODAL_OPEN, ASK_NONE_SAVE_MODAL_CLOSE, CREATE_ERROR_MODAL_OPEN, CREATE_ERROR_MODAL_CLOSE, CREATE_SUCCESS_MODAL_OPEN, CREATE_SUCCESS_MODAL_CLOSE } from '../actions/constants'
import { ModalAction } from '../actions/modalActions'


const initialState = {
  isLoginModalOpen : false,
  requestLoginModal : false,
  askNoneSaveModal : false,
  createErrorModal : false,
  createSuccessModal: false,
  errorMessage: null
}

const modalReducer = (state = initialState, action: any) => {
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
    case ASK_NONE_SAVE_MODAL_OPEN : 
      return {
        ...state,
        askNoneSaveModal : true
      }
    case ASK_NONE_SAVE_MODAL_CLOSE : 
      return {
        ...state,
        askNoneSaveModal : false
      }
    case CREATE_ERROR_MODAL_OPEN :
      return {
        ...state,
        createErrorModal : true,
        errorMessage: action.message
      }
    case CREATE_ERROR_MODAL_CLOSE : 
      return {
        ...state,
        createErrorModal : false
      }
    case CREATE_SUCCESS_MODAL_OPEN : 
      return {
        ...state,
        createSuccessModal : true
      }
    case CREATE_SUCCESS_MODAL_CLOSE :
      return {
        ...state,
        createSuccessModal : false
      }
      default:
        return state
  }
}

export default modalReducer
import { IS_LOGIN, SUCCESS_LOGIN } from '../actions/constants'
import { UserAction } from '../actions/userActions'

const initialState = {
  isLogin : false
}

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case IS_LOGIN : 
      return state.isLogin
      
    case SUCCESS_LOGIN :
      return {
        ...state,
        isLogin : true
      }
    default:
      return state
  }
};

export default userReducer
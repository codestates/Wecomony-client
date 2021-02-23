import { IS_LOGIN } from '../actions/constants'
import { UserAction } from '../actions/userActions'

const initialState = {
  isLogin : false
}

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case IS_LOGIN : 
    return state.isLogin
    default:
      return state
  }
};

export default userReducer
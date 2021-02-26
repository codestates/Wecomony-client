import { combineReducers } from 'redux';
import userReducer from './userReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
  userStatus : userReducer,
  modalStatus : modalReducer
})



export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';
import userReducer from './userReducer'
import modalReducer from './modalReducer'
import pageReducer from './pageReducer'

const rootReducer = combineReducers({
  userStatus : userReducer,
  modalStatus : modalReducer,
  pageStatus : pageReducer
})



export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;

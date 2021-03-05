import { takeEvery, put, call } from 'redux-saga/effects';
import workerLogin from './login'
import workerCreateAccount from './createAccount'
import workerCreateContent from './createContent'
import { TRY_LOGIN, CREATE_NEW_ACCOUNT, CREATE_NEW_CONTENT } from '../actions/constants'

function* rootSaga(){
  yield takeEvery(TRY_LOGIN, workerLogin)
  yield takeEvery(CREATE_NEW_ACCOUNT, workerCreateAccount)
  yield takeEvery(CREATE_NEW_CONTENT, workerCreateContent)  
}

export default rootSaga;
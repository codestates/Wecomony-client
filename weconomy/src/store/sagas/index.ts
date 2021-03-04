import { takeEvery, put, call } from 'redux-saga/effects';
import workerLogin from './login'
import workerCreateAccount from './createAccount'
import { TRY_LOGIN, CREATE_NEW_ACCOUNT } from '../actions/constants'

function* rootSaga(){
  yield takeEvery(TRY_LOGIN, workerLogin)
  yield takeEvery(CREATE_NEW_ACCOUNT, workerCreateAccount)
}

export default rootSaga;
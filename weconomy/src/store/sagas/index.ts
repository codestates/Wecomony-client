import { takeEvery, put, call } from 'redux-saga/effects';
import workerLogin from './login'
import workerCreateAccount from './createAccount'
import workerCreateContent from './createContent'
import workerLoading from './loading'
import workerAddMember from './addMember'
import { TRY_LOGIN, CREATE_NEW_ACCOUNT, CREATE_NEW_CONTENT, LOADING_WORKER_START, ADD_MEMEBER_WORKER_START } from '../actions/constants'

function* rootSaga(){
  yield takeEvery(TRY_LOGIN, workerLogin)
  yield takeEvery(CREATE_NEW_ACCOUNT, workerCreateAccount)
  yield takeEvery(CREATE_NEW_CONTENT, workerCreateContent)  
  yield takeEvery(LOADING_WORKER_START, workerLoading)
  yield takeEvery(ADD_MEMEBER_WORKER_START, workerAddMember)
}

export default rootSaga;
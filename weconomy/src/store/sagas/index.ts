import { takeEvery, put, call } from 'redux-saga/effects';
import workerLogin from './login'
import workerCreateAccount from './createAccount'
import workerCreateContent from './createContent'
import workerLoading from './loading'
import workerAddMember from './addMember'
import workerUpdateTotalCost from './updateTotalCost'
import workerDeleteAccount from './deleteAccount'
import workerUpdateContent from './updateContent'
import workerDeleteContent from './deleteContent'
import workerGetUserData from './getUserData'
import workerSendEmail from './sendEmail'
import workerOutOfAccount from './outOfAccount'
import workerSighOutUser from './sighOutUser'
import { TRY_LOGIN, CREATE_NEW_ACCOUNT, LOADING_WORKER_START, ADD_MEMEBER_WORKER_START, CREATE_NEW_CONTENT, UPDATE_GROUP_TOTAL_COST, DELETE_ACCOUNT, UPDATE_CONTENT, DELETE_CONTENT, GET_USER_DATA_AGAIN, SEND_EMAIL, OUT_OF_ACCOUNT, SIGN_OUT_USER } from '../actions/constants'

function* rootSaga(){
  yield takeEvery(TRY_LOGIN, workerLogin)
  yield takeEvery(CREATE_NEW_ACCOUNT, workerCreateAccount)
  yield takeEvery(CREATE_NEW_CONTENT, workerCreateContent)  
  yield takeEvery(LOADING_WORKER_START, workerLoading)
  yield takeEvery(ADD_MEMEBER_WORKER_START, workerAddMember)
  yield takeEvery(UPDATE_GROUP_TOTAL_COST, workerUpdateTotalCost)
  yield takeEvery(DELETE_ACCOUNT, workerDeleteAccount)
  yield takeEvery(UPDATE_CONTENT, workerUpdateContent)
  yield takeEvery(DELETE_CONTENT, workerDeleteContent)
  yield takeEvery(GET_USER_DATA_AGAIN, workerGetUserData)
  yield takeEvery(SEND_EMAIL, workerSendEmail)
  yield takeEvery(OUT_OF_ACCOUNT, workerOutOfAccount)
  yield takeEvery(SIGN_OUT_USER, workerSighOutUser)
}


export default rootSaga;
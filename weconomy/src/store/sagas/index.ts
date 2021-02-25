import { takeEvery, put, call } from 'redux-saga/effects';
import workerLogin from './login'
import { TRY_LOGIN } from '../actions/constants'

function* rootSaga(){
  yield takeEvery(TRY_LOGIN, workerLogin)
}

export default rootSaga;
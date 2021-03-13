import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { nowLoadingOn, nowLoadingOff } from '../actions/modalActions';
import axios from 'axios';
import workerLogin from './login';

function* workerLoading() {
  yield put(nowLoadingOn())
  yield delay(1500)
  yield put(nowLoadingOff())
}

export default workerLoading
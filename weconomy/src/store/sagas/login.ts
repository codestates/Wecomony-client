import { FaRProject } from 'react-icons/fa';
import { takeEvery, put, call } from 'redux-saga/effects';
import { successLogin } from '../actions/userActions'

function* workerLogin() {
  console.log('hello User Worker')
  yield put(successLogin())
}


export default workerLogin
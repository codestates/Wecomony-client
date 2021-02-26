import { FaRProject } from 'react-icons/fa';
import { takeEvery, put, call } from 'redux-saga/effects';
import { successLogin, saveToken, saveUserData } from '../actions/userActions'
import { loginModalClose } from '../actions/modalActions'

const KaKaologOutURL = 'https://kauth.kakao.com/oauth/logout?client_id=57a2e57336e3dd27788a358cdba2674f&logout_redirect_uri=http://localhost:3000/'
const KaKaologinURL = '"https://kauth.kakao.com/oauth/authorize?client_id=57a2e57336e3dd27788a358cdba2674f&redirect_uri=http://localhost:3000/&response_type=code"'
const KaKaoSignOutURL = "https://localhost:3000/v1/user/deregister?user_id=1642236625&referrer_type=UNLINK_FROM_APPS"

function* workerLogin(action: any) {
  console.log(action.data)
        yield put(saveUserData(action.data))
        yield put(successLogin())
        yield put(loginModalClose())
}


export default workerLogin
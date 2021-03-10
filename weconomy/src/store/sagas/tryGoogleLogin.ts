import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { successLogin, saveUserData, getUserNowGroup, saveUserGoogle } from '../actions/userActions';
import { loginModalClose } from '../actions/modalActions';
import axios from 'axios';
import adduser from '../../graphQuery/adduser';
import testHasUser from '../../graphQuery/testHasUser';
import getUserGroups from '../../graphQuery/getUserGroups'

function* workerGoogleLogin(action: any) {
  const updateAction = Object.assign(action.data);
  const testHasUserQuery = testHasUser(action.data.email)
  const adduserQuery = adduser(
    action.data.email,
    action.data.imageUrl,
  );
  let groupData: Array<object> = []

  yield axios
      .post(
        'https://sench.projects1faker.com/graphql?query=' +
          encodeURIComponent(testHasUserQuery),
      ).then((res) => {
        if (res.data.data.userGet.length === 0) {
          axios
            .post(
              'https://sench.projects1faker.com/graphql?query=' +
                encodeURIComponent(adduserQuery),
            )
            .then((res) => {
              updateAction.id = res.data.data.userAdd.id;
            });
        } else {
          updateAction.id = res.data.data.userGet[0].id;
        }
      });
      yield delay(100)
    const getUserGroupsQuery = getUserGroups(updateAction.id)
    yield axios.post('https://sench.projects1faker.com/graphql?query=' +
    encodeURIComponent(getUserGroupsQuery)).then((res) => {
      console.log(res.data.data.userGet[0])
      groupData = res.data.data.userGet[0].Meets
    
    })
    yield delay(100)
    yield put(getUserNowGroup(groupData)) 
    yield put(saveUserGoogle(updateAction));
    yield put(successLogin());
    yield put(loginModalClose());
}


export default workerGoogleLogin
import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { successLogin, saveUserData, getUserNowGroup } from '../actions/userActions';
import { loginModalClose } from '../actions/modalActions';
import axios from 'axios';
import adduser from '../../graphQuery/adduser';
import testHasUser from '../../graphQuery/testHasUser';
import getUserGroups from '../../graphQuery/getUserGroups'

function* workerLogin(action: any) {
  const updateAction = Object.assign(action);
  const adduserQuery = adduser(
    action.data.profile.kakao_account.email,
    action.data.profile.properties.thumbnail_image,
  );
  let groupData: Array<object> = [];
  
  const testHasUserQuery = testHasUser(action.data.profile.kakao_account.email);
  try {
    yield axios
      .post(
        'https://sench.projects1faker.com/graphql?query=' +
          encodeURIComponent(testHasUserQuery),
      )
      .then((res) => {
        if (res.data.data.userGet.length === 0) {
          axios
            .post(
              'https://sench.projects1faker.com/graphql?query=' +
                encodeURIComponent(adduserQuery),
            )
            .then((res) => {
              updateAction.data.id = res.data.data.userAdd.id;
            });
        } else {
          updateAction.data.id = res.data.data.userGet[0].id;
        }
      });
      const getUserGroupsQuery = getUserGroups(action.data.id)
      // 여기서 action.data.id 가져오면 될 듯
    yield axios.post('https://sench.projects1faker.com/graphql?query=' +
    encodeURIComponent(getUserGroupsQuery)).then((res) => {
      console.log(res.data.data.userGet[0])
      groupData = res.data.data.userGet[0].Meets
    
    })
    yield delay(500)
    yield put(getUserNowGroup(groupData)) 
    yield put(saveUserData(updateAction.data));
    yield put(successLogin());
    yield put(loginModalClose());
  } catch (err) {
    console.log(err);
  } finally {
  }
}

export default workerLogin;

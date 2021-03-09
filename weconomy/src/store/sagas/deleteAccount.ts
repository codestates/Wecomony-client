import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { getUserNowGroup } from '../actions/userActions';
import getUserGroups from '../../graphQuery/getUserGroups';
import deleteGroup from '../../graphQuery/deleteGroup';

function* workerDeleteAccount(action: any) {
  yield console.log('hello delete');
  let isDelete = false;
  const getUserGroupsQuery = getUserGroups(action.data.userId);
  const deleteGroupQuery = deleteGroup(action.data.meetId);
  let groupData: Array<object> = [];
  const body = {
    meetId: action.data.meetId,
  };

  yield axios
    .post('https://sench.projects1faker.com/meetDel', body)
    .then((res) => {
      axios
        .post(
          'https://sench.projects1faker.com/graphql?query=' +
            encodeURIComponent(deleteGroupQuery)
        )
        .then(() => {
          axios
            .post(
              'https://sench.projects1faker.com/graphql?query=' +
                encodeURIComponent(getUserGroupsQuery)
            )
            .then((res) => {
              if (res.data.data.userGet.length === 0) {
                groupData = [];
                isDelete = true;
              } else {
                groupData = res.data.data.userGet[0].Meets;
                isDelete = true;
              }
            });
        });
    });
  yield delay(500);
  if (isDelete) {
    yield put(getUserNowGroup(groupData));
  }
}

export default workerDeleteAccount;

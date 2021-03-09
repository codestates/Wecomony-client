import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { getUserNowGroup } from '../actions/userActions';
import axios from 'axios';
import getUserGroups from '../../graphQuery/getUserGroups';

function* workerGetUserData(action : any){
  const getUserGroupsQuery = getUserGroups(action.userId)
  let groupData: Array<object> = [];

  yield axios
  .post(
    'https://sench.projects1faker.com/graphql?query=' +
      encodeURIComponent(getUserGroupsQuery),
  ).then((res) => {
    groupData = res.data.data.userGet[0].Meets;
  })

  yield delay(100)
  yield put(getUserNowGroup(groupData))

}

export default workerGetUserData
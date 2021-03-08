import axios from 'axios';
import { takeEvery, put, call, delay } from 'redux-saga/effects';
import createNewContents from '../../graphQuery/createNewContent';
import getUserGroups from '../../graphQuery/getUserGroups';
import { getUserNowGroup } from '../actions/userActions';

function* workerCreateContent(action: any) {
  const getUserGroupsQuery = getUserGroups(action.value[0].userId);
  let groupData: Array<object> = [];
  for (let i = 0; i < action.value.length; i++) {
    yield axios
      .post(
        'https://sench.projects1faker.com/graphql?query=' +
          encodeURIComponent(createNewContents(action.value[i])),
      )
      .then((res) => {
        console.log(action.value);
        console.log(res.data.data.contentAdd.id);
        let body = {
          meetId: Number(action.value[0].meetId),
          contentId: res.data.data.contentAdd.id,
        };
        axios
          .post('https://sench.projects1faker.com/meetContentJoin', body)
          .then((res) => {});
      });
  }
  yield axios
    .post(
      'https://sench.projects1faker.com/graphql?query=' +
        encodeURIComponent(getUserGroupsQuery),
    )
    .then((res) => {
      groupData = res.data.data.userGet[0].Meets;
    });
  yield delay(100);
  yield put(getUserNowGroup(groupData));
}

export default workerCreateContent;

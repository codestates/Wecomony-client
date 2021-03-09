import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { getUserNowGroup } from '../actions/userActions';
import { outOfAccountModalClose } from '../actions/modalActions'
import getUserGroups from '../../graphQuery/getUserGroups';

interface dataType {
  userId : number
  meetId: number
}

interface actionType {
  type : string;
  data : dataType
}

function* workerOutOfAccount(action: actionType){
  const getUserGroupsQuery = getUserGroups(action.data.userId);
  let groupData: Array<object> = [];
  let body = {
    userId : action.data.userId,
    meetId : action.data.meetId
  }

  yield axios
  .post('https://sench.projects1faker.com/multiMeetDelete', body).then(() => {
    axios
            .post(
              'https://sench.projects1faker.com/graphql?query=' +
                encodeURIComponent(getUserGroupsQuery)
            ).then((res) => {
              groupData = res.data.data.userGet[0].Meets;
            })
  })
  yield delay(500);
  yield put(getUserNowGroup(groupData))
  yield put(outOfAccountModalClose())
}

export default workerOutOfAccount
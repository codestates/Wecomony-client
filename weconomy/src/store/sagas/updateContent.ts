import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { updateContentModalClose } from '../actions/modalActions'
import { getUserNowGroup } from '../actions/userActions';
import getUserGroups from '../../graphQuery/getUserGroups'
import updateContent from '../../graphQuery/updateContent'

function* workerUpdateContent(action: any){
  let isUpdated: boolean = false;
  let groupData: Array<object> = [];
  const getUserGroupsQuery = getUserGroups(action.data.userId)
  const updateContentQuery = updateContent(action.data.contentId, action.data.desc ,action.data.cost)

  yield axios.post('https://sench.projects1faker.com/graphql?query=' +
  encodeURIComponent(updateContentQuery)).then(() => {
    axios.post('https://sench.projects1faker.com/graphql?query=' +
    encodeURIComponent(getUserGroupsQuery)).then((res) => {
      groupData = res.data.data.userGet[0].Meets
      isUpdated = true
    })
  })
  yield delay(100)
  if(isUpdated){
    yield put(updateContentModalClose())
    yield put(getUserNowGroup(groupData))
  }
}

export default workerUpdateContent
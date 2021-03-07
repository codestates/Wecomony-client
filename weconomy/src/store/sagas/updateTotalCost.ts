import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { updateGroupModalClose } from '../actions/modalActions'
import { getUserNowGroup } from '../actions/userActions';
import getUserGroups from '../../graphQuery/getUserGroups'
import updateTotalCost from '../../graphQuery/updateTotalCost'


function* workerUpdateTotalCost(action : any){
  let isUpdated: boolean = false;
  let groupData: Array<object> = [];
  const getUserGroupsQuery = getUserGroups(action.data.userId)
  const updateTotalCostQuery = updateTotalCost(action.data.groupId, action.data.totalcost)

  yield axios.post('https://sench.projects1faker.com/graphql?query=' +
  encodeURIComponent(updateTotalCostQuery)).then(() => {
    axios.post('https://sench.projects1faker.com/graphql?query=' + encodeURIComponent(getUserGroupsQuery)).then((res) => {
      groupData = res.data.data.userGet[0].Meets
      isUpdated = true
  })
  })
  yield delay(100)
  if(isUpdated){
    yield put(updateGroupModalClose())
    yield put(getUserNowGroup(groupData))
  }
}

export default workerUpdateTotalCost
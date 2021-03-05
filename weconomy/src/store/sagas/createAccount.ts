import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { getUserNowGroup } from '../actions/userActions';
import hasManyAccount from '../../graphQuery/hasManyAccount';
import getUserGroups from '../../graphQuery/getUserGroups'
import createNewAccount from '../../graphQuery/createNewAccount'

function* workerCreateAccount(action: any){
  let isCreate = false
  const hasManyAccountQuery = hasManyAccount(action.data.id)
  const getUserGroupsQuery = getUserGroups(action.data.id)
  const createNewAccountQuery = createNewAccount(action.data.id, action.data.meetName, action.data.totalcost)
  let groupData: Array<object> = []
  yield axios.post('https://sench.projects1faker.com/graphql?query=' +
  encodeURIComponent(hasManyAccountQuery)).then((res) => {

    if(res.data.data.userGet[0].Meets.length >= 4){
      console.log('더이상 생성 불가함')
      isCreate = false
    } else {
      axios.post('https://sench.projects1faker.com/graphql?query=' +
      encodeURIComponent(createNewAccountQuery)).then((res) => {
        const body = {
          userId : action.data.id,
          meetId : res.data.data.meetAdd.id
        }
        axios.post('https://sench.projects1faker.com/multiMeetJoin', body)
        .then(() => {
          axios.post('https://sench.projects1faker.com/graphql?query=' +
          encodeURIComponent(getUserGroupsQuery)).then((res) => {
            groupData = res.data.data.userGet[0].Meets
            isCreate = true
          })
        })
      })
    }
  })
  yield delay(100)
  if(isCreate){
    yield put(getUserNowGroup(groupData))
  } 
  
}

export default workerCreateAccount
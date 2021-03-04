import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import hasManyAccount from '../../graphQuery/hasManyAccount';
import createNewAccount from '../../graphQuery/createNewAccount'

function* workerCreateAccount(action: any){
  const hasManyAccountQuery = hasManyAccount(action.data.id)
  const createNewAccountQuery = createNewAccount(action.data.meetName, action.data.totalcost)
  yield axios.post('https://sench.projects1faker.com/graphql?query=' +
  encodeURIComponent(hasManyAccountQuery)).then((res) => {

    if(res.data.data.userGet[0].Meets.length >= 4){
      console.log('더이상 생성 불가함')
    } else {
      axios.post('https://sench.projects1faker.com/graphql?query=' +
      encodeURIComponent(createNewAccountQuery)).then((res) => {
        console.log(res.data.data.meetAdd.id)
        const body = {
          userId : action.data.id,
          meetId : res.data.data.meetAdd.id
        }
        axios.post('https://sench.projects1faker.com/multiMeetJoin', body).then((res) => console.log(res))
      })
    }
  })

}

export default workerCreateAccount
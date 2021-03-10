import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import deleteUser from '../../graphQuery/deleteUser';
import getOnlyGroups from '../../graphQuery/getOnlyGroups';

function* workerSighOutUser(action: any) {
  let isDeleteJoin: boolean = false;
  const deleteUserQuery = deleteUser(action.userId);
  const getOnlyGroupQuery = getOnlyGroups(action.userId);
  console.log(action.userId);

  yield axios
    .post(
      'https://sench.projects1faker.com/graphql?query=' +
        encodeURIComponent(getOnlyGroupQuery),
    )
    .then((res) => {
      if (res.data.data.userGet[0].Meets.length === 0) {
        axios.post(
          'https://sench.projects1faker.com/graphql?query=' +
            encodeURIComponent(deleteUserQuery),
        );
      } else {
        let data = res.data.data.userGet[0].Meets;
        isDeleteJoin = true;
        for (let i = 0; i < data.length; i++) {
          let body = {
            userId: action.userId,
            meetId: data[i].id,
          };
          axios
            .post('https://sench.projects1faker.com/multiMeetDelete', body)
            .then(() => {
              
            });
        }

      }
    });
    yield delay(100)
    if(isDeleteJoin){
      axios.post(
        'https://sench.projects1faker.com/graphql?query=' +
          encodeURIComponent(deleteUserQuery),
      );
    }

}

export default workerSighOutUser;

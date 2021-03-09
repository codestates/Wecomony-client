import { takeEvery, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { updateContentModalClose } from '../actions/modalActions';
import { getUserNowGroup } from '../actions/userActions';
import getUserGroups from '../../graphQuery/getUserGroups';
import deleteContent from '../../graphQuery/deleteContent';

function* workerDeleteContent(action: any) {
  
  let isDelete: boolean = false;
  let groupData: Array<object> = [];
  const getUserGroupsQuery = getUserGroups(action.data.userId);
  const deleteContentQuery = deleteContent(action.data.contentId);

  let body = {
    contentId: action.data.contentId,
  };

  yield axios
    .post('https://sench.projects1faker.com/contentDel', body)
    .then((res) => {
      console.log(res)
      axios
        .post(
          'https://sench.projects1faker.com/graphql?query=' +
            encodeURIComponent(deleteContentQuery),
        )
        .then(() => {
          axios
            .post(
              'https://sench.projects1faker.com/graphql?query=' +
                encodeURIComponent(getUserGroupsQuery),
            )
            .then((res) => {
              groupData = res.data.data.userGet[0].Meets;
              isDelete = true;
            });
        });
    });

  yield delay(100);
  if (isDelete) {
    yield put(updateContentModalClose());
    yield put(getUserNowGroup(groupData));
  }
}

export default workerDeleteContent;

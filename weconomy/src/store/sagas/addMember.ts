import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { getUserNowGroup } from '../actions/userActions';
import { addMemberModalClose, addMemberErr } from '../actions/modalActions';
import axios from 'axios';
import testHasUser from '../../graphQuery/testHasUser';
import getUserGroups from '../../graphQuery/getUserGroups';
import hasManyAccount from '../../graphQuery/hasManyAccount';

function* workerAddMember(action: any) {
  const testHasUserQuery = testHasUser(action.data.email);
  let err: string = '';
  let groupData: Array<object> = [];
  try {
    yield axios
      .post(
        'https://sench.projects1faker.com/graphql?query=' +
          encodeURIComponent(testHasUserQuery),
      )
      .then((res) => {
        if (res.data.data.userGet.length === 0) {
          err = '존재하지 않는 유저입니다';
        } else {
          const hasManyAccountQuery = hasManyAccount(
            res.data.data.userGet[0].id,
          );
          const userId = res.data.data.userGet;
          axios
            .post(
              'https://sench.projects1faker.com/graphql?query=' +
                encodeURIComponent(hasManyAccountQuery),
            )
            .then((res) => {
              if (res.data.data.userGet[0].Meets.length >= 4) {
                err = '해당 유저는 더 이상 가입 할 수 없는 유저입니다';
              } else {
                const body = {
                  userId: userId[0].id,
                  meetId: action.data.groupId,
                };
                axios
                  .post('https://sench.projects1faker.com/multiMeetJoin', body)
                  .then((res) => {
                    const getUserGroupsQuery = getUserGroups(
                      action.data.userId,
                    );

                    axios
                      .post(
                        'https://sench.projects1faker.com/graphql?query=' +
                          encodeURIComponent(getUserGroupsQuery),
                      )
                      .then((res) => {
                        groupData = res.data.data.userGet[0].Meets;
                      });
                  });
              }
            });
        }
      });
    yield delay(100);
    if (err.length > 0) {
      yield put(addMemberErr(err));
    } else {
      console.log('추가 성공!');
      yield put(getUserNowGroup(groupData));
      yield put(addMemberModalClose());
    }
  } finally {
  }
}

export default workerAddMember;

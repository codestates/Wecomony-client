import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';
import {
  addMemberModalClose,
  addMemberErr,
} from '../store/actions/modalActions';
import { addMemberWorkerStart } from '../store/actions/groupAction';
import TextField from '@material-ui/core/TextField';

interface ParamsId {
  id: string;
}

interface member {
  id: number;
  email: string;
  img: string;
}

const AddMemberModal = () => {
  const dispatch = useDispatch();
  const params: ParamsId = useParams();
  const [email, setEmail] = useState<string>('');
  const isOpen = useSelector(
    (state: RootState) => state.modalStatus.addMemberModal,
  );
  const isErr = useSelector(
    (state: RootState) => state.modalStatus.addMemberErr,
  );

  const groups = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: any) => {
      return group.id === Number(params.id);
    }),
  );

  const userNow = useSelector((state: RootState) => state.userStatus.userData);

  const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const closeModal = () => {
    dispatch(addMemberErr(null));
    dispatch(addMemberModalClose());
  };

  const clickAddMember = () => {
    const testAleady = groups[0].Users.filter((user: member) => {
      return user.email === email;
    });
    if (email.length === 0) {
      dispatch(addMemberErr('공백이 있습니다'));
    }

    if (testAleady.length === 0) {
      let data = {
        userId: userNow?.id,
        groupId: groups[0].id,
        email: email,
      };
      dispatch(addMemberWorkerStart(data));
    } else {
      dispatch(addMemberErr('이미 가입된 유저입니다'));
    }
  };

  return (
    <>
      {isOpen ? (
        <div className="AddMemberModalOuter" onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="insideAddMemberModal animate__animated animate__fadeIn"
          >
            <div className="AddMemberModalContents">
              <div className="AddMemberModalTop">
                <div className="AddMemberModalTitle">Weconomy</div>
              </div>
              <div className="AddMemberModalMiddle">
                <TextField
                  id="outlined-multiline-flexible"
                  label="이메일"
                  value={email}
                  multiline
                  onChange={getEmail}
                  size="small"
                  fullWidth={true}
                  style={{ marginBottom: '20px' }}
                  variant="outlined"
                />

                {isErr ? (
                  <div className="AddMemberModalErr">{isErr}</div>
                ) : null}
              </div>
              <div className="AddMemberModalBottom">
                <button onClick={clickAddMember} className="AddMemberModalBtn">
                  초대
                </button>
                <button onClick={closeModal} className="AddMemberModalBtn">
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddMemberModal;

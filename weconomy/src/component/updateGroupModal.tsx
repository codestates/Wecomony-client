import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../store/reducers';
import TextField from '@material-ui/core/TextField';
import { updateGroupModalClose } from '../store/actions/modalActions';
import { updateGroupTotalcost } from '../store/actions/groupAction';
import { useParams } from 'react-router-dom';

interface ParamsId {
  id: string;
}

const UpdateGroupModal = () => {
  const dispatch = useDispatch();
  const params: ParamsId = useParams();

  const [newcost, setNewCost] = useState<string>('');
  const [Err, setErr] = useState<string>('');
  const isOpen = useSelector(
    (state: RootState) => state.modalStatus.updateGroupModal,
  );

  const getAccountCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCost(e.target.value);
  };

  const closeModal = () => {
    dispatch(updateGroupModalClose());
  };
  const userNow = useSelector((state: RootState) => state.userStatus.userData);
  const groups = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: any) => {
      return group.id === Number(params.id);
    }),
  );
  const onclickUpdate = () => {
    if (newcost.length === 0) {
      setErr('공백이 있습니다');
    } else if (isNaN(Number(newcost))) {
      return setErr('금액은 숫자만 입력 가능합니다');
    } else if (newcost.length > 9) {
      return setErr('너무 큰 액수입니다');
    } else {
      let data = {
        userId: userNow?.id,
        groupId: groups[0].id,
        totalcost: newcost,
      };
      dispatch(updateGroupTotalcost(data));
    }
  };

  return (
    <>
      {isOpen ? (
        <div>
          <div className="updateGroupModalOuter" onClick={closeModal}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="insideUpdateGroupModal animate__animated animate__fadeIn"
            >
              <div className="UpdateGroupModalContents">
                <div className="UpdateGroupModalTop">
                  <div className="UpdateGroupModalTitle">Weconomy</div>
                </div>
                <div className="UpdateGroupModalBody">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="가용 금액 변경"
                    multiline
                    value={newcost}
                    size="small"
                    onChange={getAccountCost}
                    fullWidth={true}
                    style={{ marginBottom: '20px' }}
                    variant="outlined"
                  />
                  {Err ? (
                    <div className="CreateNewAccountModalErr">{Err}</div>
                  ) : null}
                </div>
                <div className="UpdateGroupModalBottom">
                  <button
                    onClick={onclickUpdate}
                    className="UpdateGroupModalBtn"
                  >
                    변경하기
                  </button>
                  <button onClick={closeModal} className="UpdateGroupModalBtn">
                    취소하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UpdateGroupModal;

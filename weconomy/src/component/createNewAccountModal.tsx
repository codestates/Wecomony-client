import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useHistory } from 'react-router';
import { RiCloseFill } from 'react-icons/ri';
import { createNewAccountModalClose } from '../store/actions/modalActions';
import { createNewAccount } from '../store/actions/accountAction';
import TextField from '@material-ui/core/TextField';

const CreateNewAccountModal = () => {
  const dispatch = useDispatch();

  const [accountName, setAccountName] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [err, setErr] = useState<string>('');

  const getAccountName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value);
  };

  const getAccountCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCost(e.target.value);
  };

  const closeModal = () => {
    dispatch(createNewAccountModalClose());
  };
  const isOpen = useSelector(
    (state: RootState) => state.modalStatus.createNewAccountModal,
  );

  const userNow = useSelector((state: RootState) => state.userStatus.userData);

  const onclickCreate = () => {
    if (accountName.length === 0 || cost.length === 0) {
      return setErr('공백이 있습니다');
    } else if (accountName.length > 10) {
      return setErr('이름은 10 자리를 넘을 수 없습니다');
    } else if (isNaN(Number(cost))) {
      return setErr('금액은 숫자만 입력 가능합니다');
    } else if (cost.length > 9) {
      return setErr('너무 큰 액수입니다');
    } else {
      let data = {
        id: userNow?.id,
        meetName: accountName,
        totalcost: cost,
      };
      setErr('');
      setAccountName('');
      setCost('');
      closeModal();
      dispatch(createNewAccount(data));
      console.log('성공!');
    }
  };

  return (
    <>
      {isOpen ? (
        <div className="CreateNewAccountModalOuter" onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="insideCreateNewAccountModal animate__animated animate__fadeIn"
          >
            <div className="CreateNewAccountModalContents">
              <div className="CreateNewAccountModalTop">
                <div className="CreateNewAccountModalTitle">Weconomy</div>
              </div>
              <div className="CreateNewAccountModalMiddle">
                <TextField
                  id="outlined-multiline-flexible"
                  label="가계부 이름"
                  value={accountName}
                  multiline
                  onChange={getAccountName}
                  size="small"
                  fullWidth={true}
                  style={{ marginBottom: '20px' }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="가용 금액"
                  multiline
                  value={cost}
                  size="small"
                  onChange={getAccountCost}
                  fullWidth={true}
                  style={{ marginBottom: '20px' }}
                  variant="outlined"
                />
                {err ? (
                  <div className="CreateNewAccountModalErr">{err}</div>
                ) : null}
              </div>
              <div className="CreateNewAccountModalBottom">
                <button onClick={onclickCreate} className="CreateNewAccountBtn">
                  생성
                </button>
                <button onClick={closeModal} className="CreateNewAccountBtn">
                  취소
                </button>
                <div className="CreateNewAccountNotice">
                  가용금액은 추후 수정이 가능합니다
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CreateNewAccountModal;

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useHistory } from 'react-router';
import { RiCloseFill } from 'react-icons/ri';
import {
  askNoneSaveModalClose,
  loginModalOpen,
} from '../store/actions/modalActions';

const AskNoneSaveModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.modalStatus.askNoneSaveModal,
  );

  const closeModal = () => {
    dispatch(askNoneSaveModalClose());
  };

  const onClickLoginBtn = () => {
    closeModal();
    dispatch(loginModalOpen());
  };

  const toNoneLoginMode = () => {
    closeModal();
    history.push('/createAccountPage');
  };
  return (
    <>
      {isOpen ? (
        <div className="LoginModalOuter" onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="insideAskNoneSaveModal animate__animated animate__fadeIn"
          >
            <div className="askNoneSaveModalContents">
              <RiCloseFill
                className="askNoneSaveModalClose"
                onClick={closeModal}
              ></RiCloseFill>
              <div className="askNoneSaveModalTop">Weconomy</div>
              <div className="askNoneSaveModalBottom">
                <div>비회원으로 작성시 저장되지 않습니다</div>
                <button
                  onClick={onClickLoginBtn}
                  className="askNoneSaveLoginBtn"
                >
                  로그인
                </button>
                <button
                  onClick={toNoneLoginMode}
                  className="askNoneSaveLoginBtn"
                >
                  비회원으로 계속하기
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AskNoneSaveModal;

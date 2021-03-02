import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { RiCloseFill } from 'react-icons/ri';
import {
  requestLoginModalClose,
  loginModalOpen,
} from '../store/actions/modalActions';
const RequestLoginModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.modalStatus.requestLoginModal,
  );

  const closeModal = () => {
    dispatch(requestLoginModalClose());
  };

  const toLoginModal = () => {
    closeModal();
    dispatch(loginModalOpen());
  };

  return (
    <>
      {isOpen ? (
        <div className="LoginModalOuter" onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="insideRequestLoginModal animate__animated animate__fadeIn"
          >
            <div className="RequestLoginModalContents">
              <RiCloseFill
                onClick={closeModal}
                className="RequestLoginModalClose"
              ></RiCloseFill>
              <div className="requestLoginModalTop">Weconomy</div>
              <div className="loginModalBottom">
                <div>로그인이 필요한 서비스입니다</div>
                <button className="requestLoginBtn" onClick={toLoginModal}>
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RequestLoginModal;

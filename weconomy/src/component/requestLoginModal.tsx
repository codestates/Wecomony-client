import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { RiCloseFill } from 'react-icons/ri';
import { requestLoginModalClose } from '../store/actions/modalActions';
const RequestLoginModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.modalStatus.requestLoginModal,
  );

  const closeModal = () => {
    dispatch(requestLoginModalClose());
  };

  return (
    <>
      {isOpen ? (
        <div className="LoginModalOuter" onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="insideRequestLoginModal animate__animated animate__fadeIn"
          >
            <div className="loginModalContents">
              <RiCloseFill
                onClick={closeModal}
                className="loginModalClose"
              ></RiCloseFill>
              <div className="loginModalTop">Weconomy</div>
              <div className="loginModalBottom">
                <div>로그인이 필요한 서비스입니다</div>
                <button>로그인</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RequestLoginModal;

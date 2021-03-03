import * as React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { RootState } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { createErrorModalClose } from '../store/actions/modalActions';
import { FiAlertTriangle } from "react-icons/fi";

const ErrorModal: React.FC = () => {
  const isOpen = useSelector(
    (state: RootState) => state.modalStatus.createErrorModal,
  );

  const dispatch = useDispatch();

  const closeErrorModal = () => {
    dispatch(createErrorModalClose());
  };

  const errorMessage = useSelector(
    (state: RootState) => state.modalStatus.errorMessage
  )

  return (
    <>
      {isOpen ? (
        <div className="ErrorModalOuter" onClick={closeErrorModal}>
          <div
            className="ErrorModalInner animate__animated animate__headShake"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="ErrorModalContents">
              <RiCloseFill
                className="ErrorModalClose"
                onClick={closeErrorModal}
              ></RiCloseFill>
              <div className="ErrorModalTop">Weconomy</div>
              <div className="ErrorModalBottom">
                  <div className="ErrorModalAlert">
                      <FiAlertTriangle></FiAlertTriangle>
                  </div>
                  <div>{errorMessage}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ErrorModal;

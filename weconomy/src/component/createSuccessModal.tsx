import * as React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { RootState } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { createSuccessModalClose } from '../store/actions/modalActions';
import { FcApproval } from "react-icons/fc";
import { useHistory } from 'react-router';

const SuccessModal: React.FC = () => {
    const isOpen = useSelector( // createSuccessModal 의 상태를 불러옴
      (state: RootState) => state.modalStatus.createSuccessModal,
    );
  
    const dispatch = useDispatch();
  
    const closeSuccessModal = () => {
      dispatch(createSuccessModalClose());
    };
  
    return (
      <>
        {isOpen ? (
          <div className="SuccessModalOuter" onClick={closeSuccessModal}>
            <div
              className="SuccessModalInner"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="SuccessModalContents">
                <RiCloseFill
                  className="SuccessModalClose"
                  onClick={closeSuccessModal}
                ></RiCloseFill>
                <div className="SuccessModalTop">Weconomy</div>
                <div className="SuccessModalBottom">
                    <div className="SuccessModalAlert animate__animated animate__bounce">
                        <FcApproval></FcApproval>
                    </div>
                    <div>저장 됐습니다.</div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  };

  export default SuccessModal;
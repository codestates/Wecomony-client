import * as React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { RootState } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { outOfAccountModalClose } from '../store/actions/modalActions';
import { outOfAccount } from '../store/actions/groupAction';
import { FcApproval } from 'react-icons/fc';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

interface ParamsId {
  id: string;
}

const OutOfAccountModal: React.FC = () => {
  const history = useHistory();
  const params: ParamsId = useParams();
  const isOpen = useSelector(
    // createSuccessModal 의 상태를 불러옴
    (state: RootState) => state.modalStatus.outOfAccountModal,
  );

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(outOfAccountModalClose());
  };

  const userNow = useSelector((state: RootState) => state.userStatus.userData);

  const confirmOut = () => {
    let data = {
      userId: userNow?.id,
      meetId: Number(params.id),
    };

    dispatch(outOfAccount(data));
    history.push('/');
  };

  return (
    <>
      {isOpen ? (
        <div className="SuccessModalOuter" onClick={closeModal}>
          <div
            className="SuccessModalInner"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="SuccessModalContents">
              <RiCloseFill
                className="SuccessModalClose"
                onClick={closeModal}
              ></RiCloseFill>
              <div className="SuccessModalTop">Weconomy</div>
              <div className="noticeOut">정말 탈퇴하시겠습니까?</div>
              <div className="outOfAccountModalBottom">
                <button onClick={confirmOut} className="conFirmOutBtn">
                  탈퇴하기
                </button>
                <button onClick={closeModal} className="cancelOutBtn">
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

export default OutOfAccountModal;

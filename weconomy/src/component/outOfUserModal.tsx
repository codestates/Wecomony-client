import React, { ReactEventHandler } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { logoutUser, signOutUser } from '../store/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store/reducers';
import { outOfUserModalClose } from '../store/actions/modalActions'

const OutOfUserModal: React.FC = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const isOpen = useSelector(
        // createSuccessModal 의 상태를 불러옴
        (state: RootState) => state.modalStatus?.outOfUserModal,
    );

    const userData = useSelector(
        (state: RootState) => state.userStatus?.userData,
    );

    const closeModal = () => {
        dispatch(outOfUserModalClose())
    }

      const toLogOutUser = () => {
        dispatch(logoutUser());
        history.push('/');
      };

    const toSignOutUser = () => {
        toLogOutUser();
        dispatch(signOutUser(userData?.id));
        closeModal()
      };

      return (
          <>
        {isOpen ? (<div className="SuccessModalOuter" onClick={closeModal}>
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
            <div className="noticeOut">회원 탈퇴를 진행하시겠습니까?</div>
            <div className="outOfAccountModalBottom">
              <button onClick={toSignOutUser} className="conFirmOutBtn">
                탈퇴하기
              </button>
              <button onClick={closeModal} className="cancelOutBtn">
                취소
              </button>
            </div>
          </div>
        </div>
      </div>) : null}
        </>
      )
}

export default OutOfUserModal
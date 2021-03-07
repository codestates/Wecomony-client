import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';
import { CgCrown } from 'react-icons/cg';
import {
  addMemberModalOpen,
  addMemberErr,
  updateGroupModalOpen,
} from '../store/actions/modalActions';

interface ParamsId {
  id: string;
}

const AccountSideBar = () => {
  const dispatch = useDispatch();
  const params: ParamsId = useParams();
  const addMemberClick = (): void => {
    dispatch(addMemberErr(null));
    dispatch(addMemberModalOpen());
  };

  const updateGroupClick = () => {
    dispatch(updateGroupModalOpen());
  };

  const members = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: any) => {
      return group.id === Number(params.id);
    }),
  );

  const userNow = useSelector((state: RootState) => state.userStatus.userData);
  return (
    <nav className="account__sidebar">
      <div className="sidebar_Top">{members[0].meetName}</div>
      <div className="account__profile">
        {members[0].Users.reverse().map((member: any) => (
          <div className="SideBarOneMemberBox">
            {member.img !== 'undefined' ? (
              <>
                {members[0].memberNumber === member.id ? (
                  <div className="iconAdmin">
                    <CgCrown />
                  </div>
                ) : (
                  <div className="iconAdmin"></div>
                )}
                <img
                  className="SidBarMemberImg"
                  src={member.img}
                  alt="유저프로필"
                ></img>
              </>
            ) : (
              <>
                {members[0].memberNumber === member.id ? (
                  <div className="iconAdmin">
                    <CgCrown />
                  </div>
                ) : (
                  <div className="iconAdmin"></div>
                )}
                <div className="SidebarMemberIcon">
                  {member.email.slice(0, 1).toUpperCase()}
                </div>
              </>
            )}
            <div className="SideBarMemberName">{member.email}</div>
          </div>
        ))}
      </div>

      <div className="account__handleGroup">
        {members[0].Users.length < 4 ? (
          <button onClick={addMemberClick} className="accountBtns">
            멤버 초대
          </button>
        ) : null}
        {userNow?.id === members[0].memberNumber ? (
          <button onClick={updateGroupClick} className="accountBtns">
            그룹 관리
          </button>
        ) : null}
        {userNow?.id !== members[0].memberNumber ? (
          <button className="accountBtns">그룹 탈퇴</button>
        ) : null}
      </div>
    </nav>
  );
};

export default AccountSideBar;

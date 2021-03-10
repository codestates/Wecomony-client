import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';
import { CgCrown } from 'react-icons/cg';
import { GoGear } from 'react-icons/go';
import { ImExit } from 'react-icons/im';
import { GrBook } from 'react-icons/gr';

import {
  addMemberModalOpen,
  addMemberErr,
  updateGroupModalOpen,
  outOfAccountModalOpen,
} from '../store/actions/modalActions';
import { AiOutlineUserAdd } from 'react-icons/ai';

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

  const outAccountClick = () => {
    dispatch(outOfAccountModalOpen());
  };

  const members = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: any) => {
      return group.id === Number(params.id);
    }),
  );

  const userNow = useSelector((state: RootState) => state.userStatus.userData);
  return (
    <nav className="account__sidebar">
      <div className="sidebar_Top">
        <GrBook className="SidaBookIcon"></GrBook>
        {members[0].meetName}
      </div>
      <div className="account__profile">
        {members[0].Users.map((member: any) => (
          <>
            <div className="SideBarOneMemberBox">
              {member.img !== 'undefined' ? (
                <>
                  {members[0].memberNumber === member.id ? (
                    <div className="iconAdmin">
                      <CgCrown />
                    </div>
                  ) : (
                    <div className="iconAdminNone">
                      <CgCrown />
                    </div>
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
          </>
        ))}
        {members[0].Users.length < 4 ? (
          <div onClick={addMemberClick} className="SideBarAddMemberBox">
            <AiOutlineUserAdd />
          </div>
        ) : null}
      </div>

      <div className="account__handleGroup">
        {userNow?.id === members[0].memberNumber ? (
          <button onClick={updateGroupClick} className="accountBtns">
            <GoGear></GoGear>
          </button>
        ) : null}
        {userNow?.id !== members[0].memberNumber ? (
          <button onClick={outAccountClick} className="accountBtns">
            <ImExit></ImExit>
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default AccountSideBar;

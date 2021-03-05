import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../store/reducers';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  addMemberModalOpen,
  addMemberErr,
} from '../store/actions/modalActions';

interface ParamsId {
  id: string;
}

const AccountSideBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params: ParamsId = useParams();
  const addMemberClick = (): void => {
    dispatch(addMemberErr(null));
    dispatch(addMemberModalOpen());
  };

  const manageGroup = (): void => {};
  const members = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: any) => {
      return group.id === Number(params.id);
    }),
  );
  return (
    <nav className="account__sidebar">
      <div className="sidebar_Top">{members[0].meetName}</div>
      <div className="account__profile">
        {members[0].Users.map((member: any) => (
          <div className="SideBarOneMemberBox">
            <img
              className="SidBarMemberImg"
              src={member.img}
              alt="유저프로필"
            ></img>
            <div className="SideBarMemberName">{member.email}</div>
          </div>
        ))}
      </div>

      <div className="account__handleGroup">
        <button onClick={addMemberClick} className="accountBtns">
          멤버 초대
        </button>
        <button className="accountBtns">그룹 관리</button>
        <button className="accountBtns">그룹 탈퇴</button>
      </div>
    </nav>
  );
};

export default AccountSideBar;

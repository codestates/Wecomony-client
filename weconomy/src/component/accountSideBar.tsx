import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AccountSideBar = () => {
  const history = useHistory();

  const createGroup = (): void => {};

  const manageGroup = (): void => {};

  return (
    <nav className="account__sidebar">
      <ul className="account__profile">
        <li className="account__list">
          <div className="account__username">유재우</div>
        </li>
        <li className="account__list">
          <div className="account__username">박준석</div>
        </li>
        <li className="account__list">
          <div className="account__username">이상철</div>
        </li>
        <li className="account__list">
          <div className="account__username">김용호</div>
        </li>
      </ul>

      <div className="account__handleGroup">
        <button onClick={createGroup} className="accountBtns">
          그룹 관리
        </button>
        <button onClick={manageGroup} className="accountBtns">
          그룹 탈퇴
        </button>
      </div>
    </nav>
  );
};

export default AccountSideBar;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store/reducers';
import {
  loginModalOpen,
  requestLoginModalOpen,
} from '../store/actions/modalActions';

const Nav: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const openLoginModal = () => {
    dispatch(loginModalOpen());
  };
  const isLogin = useSelector((state: RootState) => state.userStatus.isLogin);

  const toAccountPage = () => {
    if (isLogin) {
      history.push('/accountpage');
    } else {
      dispatch(requestLoginModalOpen());
    }
  };
  const toogleBtnSet = () => {
    const side = document.querySelector('.sidebar') as HTMLFormElement;
    const sideMenu = document.querySelector(
      '.sidebar__menu',
    ) as HTMLFormElement;
    const sideLogin = document.querySelector(
      '.sidebar__handleLogin',
    ) as HTMLFormElement;
    const sideProfile = document.querySelector(
      '.sidebar__profile',
    ) as HTMLFormElement;
    side.classList.toggle('active');
    sideMenu.classList.toggle('active');
    sideLogin.classList.toggle('active');
    sideProfile.classList.toggle('active');
  };

  const userImage = useSelector(
    (state: RootState) => state.userStatus.userData?.thumbnail,
  );

  return (
    <nav className="navbar">
      <div
        onClick={() => {
          history.push('/mainpage');
        }}
        className="navbar__logo"
      >
        Weconomy
      </div>

      <ul className="navbar__menu">
        <li className="navBtns">가계부 작성하기</li>
        <li onClick={toAccountPage} className="navBtns">
          내 가계부
        </li>
        <li onClick={() => history.push('/helpdesk')} className="navBtns">
          문의하기
        </li>
      </ul>

      <div className="navbar__handleLogin">
        {isLogin ? (
          <img
            className="userProfileNav"
            src={userImage}
            alt="유저프로필"
          ></img>
        ) : (
          <button onClick={openLoginModal} className="navbar__loginBtn">
            로그인
          </button>
        )}
      </div>

      <nav className="sidebar">
        <div className="sidebar__profile">
          <img
            className="sidebar__image"
            src="https://ifh.cc/g/xMR6n6.png"
          ></img>
        </div>
        <ul className="sidebar__menu">
          <li className="sideBtns">가계부 작성하기</li>
          <li onClick={toAccountPage} className="sideBtns">
            내 가계부
          </li>
          <li className="sideBtns">문의하기</li>
        </ul>

        <div className="sidebar__handleLogin">
          <a>로그인</a>
        </div>
      </nav>

      <div onClick={toogleBtnSet} className="navbar__toogleBtn">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;

/*


*/

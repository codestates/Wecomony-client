import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store/reducers';
import {
  loginModalOpen,
  requestLoginModalOpen,
  askNoneSaveModalOpen,
} from '../store/actions/modalActions';
import { logoutUser, signOutUser } from '../store/actions/userActions';

const MobileSidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.userStatus.isLogin);
  const userData = useSelector((state: RootState) => state.userStatus.userData);
  const userImage = useSelector(
    (state: RootState) => state.userStatus.userData?.thumbnail,
  );
  const email = useSelector(
    (state: RootState) => state.userStatus.userData?.email,
  );

  return (
    <nav className="sidebar">
      <div className="sidebar__profile">
        {userImage ? (
          <img
            className="userProfileSideBar"
            src={userImage}
            alt="유저프로필"
          ></img>
        ) : (
          <div className="userProfileSideBar">
            {email.slice(0, 1).toUpperCase()}
          </div>
        )}
      </div>
      <ul className="sidebar__menu">
        <li className="sideBtns">가계부 작성하기</li>
        <li className="sideBtns">내 가계부</li>
        <li className="sideBtns">문의하기</li>
      </ul>

      <div className="sidebar__handleLogin">
        <button className="mobileSidbarLoginBtn">로그인</button>
      </div>
    </nav>
  );
};

export default MobileSidebar;

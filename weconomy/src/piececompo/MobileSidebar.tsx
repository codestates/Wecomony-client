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

  const isLogin = useSelector((state: RootState) => state.userStatus?.isLogin);

  const userData = useSelector(
    (state: RootState) => state.userStatus?.userData,
  );

  const openLoginModal = () => {
    dispatch(loginModalOpen());
  };

  const toAccountPage = () => {
    if (isLogin) {
      history.push('/selectaccount');
    } else {
      dispatch(requestLoginModalOpen());
    }
  };

  const toCreateAccount = () => {
    if (isLogin) {
      history.push('/createAccountPage');
    } else {
      dispatch(askNoneSaveModalOpen());
    }
  };

  const toLogOutUser = () => {
    dispatch(logoutUser());
    history.push('/');
  };

  const toSignOutUser = () => {
    toLogOutUser();
    dispatch(signOutUser(userData?.id));
  };

  return (
    <nav className="sidebar">
      <div className="sidebar__profile"></div>
      <ul className="sidebar__menu">
        <li onClick={toCreateAccount}className="sideBtns">가계부 작성하기</li>
        <li onClick={toAccountPage} className="sideBtns">내 가계부</li>
        <li onClick={() => history.push('/helpdesk')} className="sideBtns">문의하기</li>
      </ul>

      <div className="sidebar__handleLogin">
        {isLogin ? (<>
                        <button onClick={toLogOutUser} className="mobileSidebarLoginBtn">
                        로그아웃
                      </button>
                      <button onClick={toSignOutUser} className="mobileSidebarLoginBtn">
                        회원탈퇴
                      </button>
                      </>
        ) : (<button onClick={openLoginModal} className="mobileSidebarLoginBtn">로그인</button>)}
      </div>
    </nav>
  );
};

export default MobileSidebar;

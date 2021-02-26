import * as React from 'react';
import { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import { BsFillChatFill } from 'react-icons/bs';
import { tryLogin } from '../store/actions/userActions';
import { loginModalClose } from '../store/actions/modalActions';
import { useDispatch } from 'react-redux';
import KaKaoLogin from 'react-kakao-login';
const InsideLoginModal: React.FC = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState<string>('');

  const closeLoginModal = () => {
    dispatch(loginModalClose());
  };

  const getToken = (res: any) => {
    dispatch(tryLogin(res));
  };

  return (
    <div className="LoginModalOuter" onClick={closeLoginModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="insideLoginModal animate__animated animate__fadeIn"
      >
        <div className="loginModalContents">
          <RiCloseFill
            onClick={closeLoginModal}
            className="loginModalClose"
          ></RiCloseFill>
          <div className="loginModalTop">Weconomy</div>
          <div className="loginModalBottom">
            <KaKaoLogin
              token={'57a2e57336e3dd27788a358cdba2674f'}
              onSuccess={getToken}
              onFail={() => {}}
              className="kakaobtn"
              style={{ width: '100%' }}
            >
              <div>
                <BsFillChatFill className="logoLoginbtn" />
                카카오 로그인
              </div>
            </KaKaoLogin>

            <button className="googlebtn">
              <FaGoogle className="logoLoginbtn" />
              구글 로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideLoginModal;

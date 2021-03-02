import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { successLogin, tryLogin } from '../store/actions/userActions';
import { requestLoginModalOpen } from '../store/actions/modalActions';
import useMedia from '../customhooks/useMedia';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store/reducers';
import Nav from '../component/nav';
import LoginModal from '../component/loginmodal';
import RequestLoginModal from '../component/requestLoginModal';
import AskNoneSaveModal from '../component/askNoneSave';
import axios from 'axios';

const MainPage: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.userStatus.isLogin);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isMobile } = useMedia();

  useEffect(() => {});

  const query = `query {
    userGet{
      email
      groups {
        id
      }
    }
  }`;
  axios.defaults.withCredentials = true;
  const getuser = () => {
    axios
      .get(
        'https://sench.projects1faker.com/graphql?query=' +
          encodeURIComponent(query),
      )
      .then((res) => {
        console.log(res);
      });
  };

  const toAccountPage = () => {
    if (isLogin) {
      history.push('/selectaccount');
    } else {
      dispatch(requestLoginModalOpen());
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="mainContainer">
        <LoginModal></LoginModal>
        <RequestLoginModal></RequestLoginModal>
        <AskNoneSaveModal></AskNoneSaveModal>
        <div className="section1">
          <div className="textBox">
            {isMobile ? <h1 className="MainTitleLogo">Weconomy</h1> : null}
            {isMobile ? (
              <h1 className="MainTitle">
                아직도 <span className="textPoint">가계부</span>가 멀게만
                느껴지시나요?
              </h1>
            ) : (
              <h1 className="MainTitle animate__animated animate__fadeInDown">
                아직도 <span className="textPoint">가계부</span>가 멀게만
                느껴지시나요?
              </h1>
            )}
            {isMobile ? (
              <span className="MainDesc">
                Weconomy와 함께 편리한 <span className="textPoint">가계부</span>
                를 작성해보세요!
              </span>
            ) : (
              <span className="MainDesc animate__animated animate__fadeInDown">
                Weconomy와 함께 편리한 <span className="textPoint">가계부</span>
                를 작성해보세요!
              </span>
            )}
            {isMobile ? (
              <button onClick={toAccountPage} className="mainMobileBtn">
                Weconomy 시작하기
              </button>
            ) : (
              <button onClick={toAccountPage} className="mainTopBtn">
                Weconomy 시작하기
              </button>
            )}
          </div>
          <div className="imageBox">
            <img
              className="caculator"
              src="https://ifh.cc/g/4963pQ.jpg"
              alt="계산기"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

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
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const MainPage: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.userStatus?.isLogin);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isMobile } = useMedia();

  useEffect(() => {});

  axios.defaults.withCredentials = true;

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
              <h1
                className="MainTitle"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                아직도 <span className="textPoint">가계부</span>가 멀게만
                느껴지시나요?
              </h1>
            )}
            {isMobile ? (
              <span className="MainDesc">
                <span className="WeconomyPoint"> Weconomy</span>와 함께 편리한{' '}
                <span className="textPoint">가계부</span>를 작성해보세요!
              </span>
            ) : (
              <span
                className="MainDesc"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <span className="WeconomyPoint">Weconomy</span>와 함께 편리한{' '}
                <span className="textPoint">가계부</span>를 작성해보세요!
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
        <div className="section2">
          <div className="TopSection2">
            <div
              className="LeftTopSection2"
              data-aos="fade-right"
              data-aos-duration="1500"
            ></div>
            <div
              className="RightTopSection2"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div className="RightTopSection2-1">월간 주간 일간</div>
              <div className="RightTopSection2-2">
                모든 <span className="pointText2">가계</span>가
              </div>
              <div className="RightTopSection2-3">한 눈에 보이는 구조</div>
            </div>
          </div>
          <div className="BottomSection2">
            <div
              className="LeftBottomSection2"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div className="LeftBottomSection2-1">
                아직도 혼자 작성하시나요?
              </div>
              <div className="LeftBottomSection2-2">
                <span className="WeconomyPoint">Weconomy</span>에서는 구성원과
                함께 관리할 수 있습니다!
              </div>
            </div>
            <div
              className="RightBottomSection2"
              data-aos="fade-left"
              data-aos-duration="1500"
            ></div>
          </div>
        </div>
        <div className="section3">
          <div className="rightSection3">
            <div className="rightSection3-1">언제 어디서든,</div>
            <div className="rightSection3-2">빠르고 쉬운 가계부 관리</div>
            <div className="rightSection3-3">
              <span>Weconomy</span>는 언제 어디서든 가계부 관리를 할 수 있도록
            </div>
            <div className="rightSection3-4">
              PC웹과 모바일웹을 모두 지원합니다.
            </div>
          </div>
          <div className="leftSection3"></div>
        </div>

        <div className="section4">
          <div className="section4-mainDesc">
            <span className="section4-descSpan" >Weconomy </span> 는 어떤 가계부인가요?
          </div>

          <div className="section4-userReview1">

              <div className="section4-userInfo1">
              <img src= "https://ifh.cc/g/GkNvwz.png" className="section4-userProfile"></img>
                <img src= "https://ifh.cc/g/MO0P27.png" className="section4-userRate"></img>
                <span className="section4-userName">메이슨</span>
              </div>
              

                <div className="secton4-userComment1">
                사회초년생으로써 올바른 경제 습관을 미리 길러야 겠다는 생각이 들었는데 위코노미를
                사용하면서 효과적으로 공부할 수 있었어요!
                </div>
          </div>

          <div className="section4-userReview2">

          <div className="secton4-userComment2">
                친구들과 펜션으로 놀러갈 때 회비에 대한 수입, 지출 내역을 함께 공유하면서 
                효율적으로 관리하고 싶었는데 위코노미를 통해 잘 해결할 수 있었어요!
                </div>

              <div className="section4-userInfo2">
              <img src="https://ifh.cc/g/Y7W7mM.png" className="section4-userProfile"></img>
                <img src= "https://ifh.cc/g/MO0P27.png"className="section4-userRate"></img>
                <div className="section4-userName">로렌스</div>
              </div>

          </div>
        </div>
        <div className="section5"></div>
      </div>
    </>
  );
};

export default MainPage;

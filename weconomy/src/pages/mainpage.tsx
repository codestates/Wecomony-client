import * as React from 'react';

const MainPage: React.FC = () => {
  return (
    <div className="mainContainer">
      <div className="section1">
        <div className="textBox">
          <h1 className="title">
            아직도 <span className="textPoint">가계부</span>가 멀게만
            느껴지시나요?
          </h1>
          <span className="desc">
            Weconomy와 함께 편리한 <span className="textPoint">가계부</span>를
            작성해보세요!
          </span>
          <button className="mainTopBtn">Weconomy 시작하기</button>
        </div>
        <div className="imageBox">
          <img
            className="caculator"
            src="https://ifh.cc/g/4963pQ.jpg"
            alt="계산기"
          ></img>
        </div>
      </div>
      <div className="section2"></div>
      <div className="section3"></div>
      <div className="section4"></div>
    </div>
  );
};

export default MainPage;

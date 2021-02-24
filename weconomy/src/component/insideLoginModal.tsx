import * as React from 'react';
import { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';

const InsideLoginModal: React.FC = () => {
  return (
    <div className="LoginModalOuter">
      <div className="insideLoginModal animate__animated animate__fadeIn">
        <div className="loginModalContents">
          <div className="loginModalTop">Weconomy</div>
          <div className="loginModalBottom">
            <button className="kakaobtn">
              <BsFillChatFill className="logoLoginbtn" />
              카카오 로그인
            </button>
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

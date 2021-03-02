import * as React from 'react';
import { useState } from 'react';
import Nav from '../component/nav';
import LoginModal from '../component/loginmodal';
import RequestLoginModal from '../component/requestLoginModal';
import AskNoneSaveModal from '../component/askNoneSave';
import AccountSideBar from '../component/accountSideBar';
import CreateAccount from '../component/createAccount';
import { IoCalculator } from 'react-icons/io5';

const CreateAccountPage: React.FC = () => {
  return (
    <>
      <Nav></Nav>
      <div className="createAccount-container">
        <LoginModal></LoginModal>
        <RequestLoginModal></RequestLoginModal>
        <AskNoneSaveModal></AskNoneSaveModal>
        <div className="belowBtns-calculator">
          <IoCalculator></IoCalculator>
        </div>
        <div className="createAccount-content">
          <CreateAccount></CreateAccount>
        </div>
      </div>
    </>
  );
};

export default CreateAccountPage;

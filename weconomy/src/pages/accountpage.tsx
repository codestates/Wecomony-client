import * as React from 'react';
import AccountGraph from '../component/accountGraph';
import AccountByDay from '../component/accountByDay';
import AccountNavBar from '../component/accountNavBar';
import AccountSideBar from '../component/accountSideBar';

const AccountPage: React.FC = () => {
  return (
    <>
    <AccountNavBar></AccountNavBar>
    <div className="Account-container">
      <div className="notice-Section"></div>
      <div className="content-Section">
        <AccountGraph></AccountGraph>
        <AccountByDay></AccountByDay>
        <AccountSideBar></AccountSideBar>
      </div>
    </div>
    </>
  );
};

export default AccountPage;

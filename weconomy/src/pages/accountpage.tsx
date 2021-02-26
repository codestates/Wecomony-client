import * as React from 'react';
import AccountGraph from '../component/accountGraph';
import AccountByDay from '../component/accountByDay';
import AccountSideBar from '../component/accountSideBar';
import Nav from '../component/nav';

const AccountPage: React.FC = () => {
  return (
    <>
      <Nav></Nav>
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

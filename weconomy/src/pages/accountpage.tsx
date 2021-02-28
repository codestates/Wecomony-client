import * as React from 'react';
import AccountGraph from '../component/accountGraph';
import AccountByDay from '../component/accountByDay';
import AccountSideBar from '../component/accountSideBar';
import Nav from '../component/nav';
import useMedia from '../customhooks/useMedia';
const AccountPage: React.FC = () => {
  const { isMobile } = useMedia();
  return (
    <>
      <Nav></Nav>
      {isMobile ? (
        <div className="Account-container">
          <div className="notice-Section"></div>

          <AccountGraph></AccountGraph>
          <div className="Account-container2">
            <AccountByDay></AccountByDay>
          </div>
        </div>
      ) : (
        <div className="Account-container">
          <div className="notice-Section"></div>
          <div className="content-Section">
            <AccountGraph></AccountGraph>
            <AccountByDay></AccountByDay>
            <AccountSideBar></AccountSideBar>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountPage;

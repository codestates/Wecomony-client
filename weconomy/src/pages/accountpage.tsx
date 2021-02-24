import * as React from 'react';
import AccountGraph from '../component/accountGraph';
import AccountByDay from '../component/accountByDay';

const AccountPage: React.FC = () => {
  return (
    <div className="Account-container">
      <div className="notice-Section"></div>
      <div className="content-Section">
        <AccountGraph></AccountGraph>
        <AccountByDay></AccountByDay>
      </div>
    </div>
  );
};

export default AccountPage;

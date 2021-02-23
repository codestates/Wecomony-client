import * as React from 'react';
import AccountGraph from '../component/accountGraph';

const AccountPage: React.FC = () => {
  return (
    <div className="Account-container">
      <div className="notice-Section"></div>
      <div className="content-Section">
        <AccountGraph></AccountGraph>
      </div>
    </div>
  );
};

export default AccountPage;

import * as React from 'react';
import AccountGraph from '../component/accountGraph';
import AccountByDay from '../component/accountByDay';
import Ticker from 'react-ticker';
import Nav from '../component/nav';

const AccountPage: React.FC = () => {
  return (
    <div className="Account-container">
      <Nav></Nav>
      <div className="notice-Section">
        <Ticker offset="run-in" speed={10} mode="await">
          {({ index }) => (
            <>
              <h2 style={{ color: 'blue' }}>여러분 아껴씁시다!</h2>
            </>
          )}
        </Ticker>
      </div>
      <div className="content-Section">
        <AccountGraph></AccountGraph>
        <AccountByDay></AccountByDay>
      </div>
    </div>
  );
};

export default AccountPage;

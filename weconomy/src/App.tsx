import React from 'react';
import MainPage from '../src/pages/mainpage';
import AccountPage from '../src/pages/accountpage';
import HelpDeskPage from '../src/pages/helpDeskPage';
import './style/mainpage.scss';
import './style/mainnav.scss';
import './style/LoginModal.scss';
import './style/AccountPage.scss';
import './style/AccountGraph.scss';
import './style/AccountByDay.scss';
import './style/AccountDetail.scss';
import './style/AccountSideBar.scss';
import './style/HelpDeskPage.scss';
import './style/RequestLoginModal.scss';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/mainpage" render={() => <MainPage />} />
        <Route exact path="/" render={() => <Redirect to="/mainpage" />} />
        <Route exact path="/accountpage" render={() => <AccountPage />} />
        <Route exact path="/helpdesk" render={() => <HelpDeskPage />} />
      </Switch>
    </>
  );
};

export default withRouter(App);

import React from 'react';
import MainPage from '../src/pages/mainpage';
import AccountPage from '../src/pages/accountpage';
import HelpDeskPage from '../src/pages/helpDeskPage';
import CreateAccountPage from '../src/pages/createAccountPage';
import SelectAccount from '../src/pages/selectAccount';
import './style/mainpage.scss';
import './style/mainnav.scss';
import './style/LoginModal.scss';
import './style/AccountPage.scss';
import './style/AccountGraph.scss';
import './style/AccountByDay.scss';
import './style/AccountDetail.scss';
import './style/AccountSideBar.scss';
import './style/HelpDeskPage.scss';
import './style/CreateAccount.scss';
import './style/RequestLoginModal.scss';
import './style/SelectAccount.scss';
import './style/AskNoneSaveModal.scss';
import './style/ErrorModal.scss';
import './style/SuccessModal.scss';
import './style/createNewAccountModal.scss';
import './style/AddMemberModal.scss';
import './style/test.scss';
import './style/UpdateGroupModal.scss';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/mainpage" render={() => <MainPage />} />
        <Route exact path="/" render={() => <Redirect to="/mainpage" />} />
        <Route exact path="/selectaccount" render={() => <SelectAccount />} />
        <Route exact path="/accountpage/:id" render={() => <AccountPage />} />
        <Route exact path="/helpdesk" render={() => <HelpDeskPage />} />
        <Route
          exact
          path="/createAccountPage"
          render={() => <CreateAccountPage />}
        />
      </Switch>
    </>
  );
};

export default withRouter(App);

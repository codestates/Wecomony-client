import React from 'react';
import MainPage from '../src/pages/mainpage';
import './style/mainpage.scss';
import './style/LoginModal.scss';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/mainpage" render={() => <MainPage />} />
        <Route exact path="/" render={() => <Redirect to="/mainpage" />} />
      </Switch>
    </>
  );
};

export default withRouter(App);

import React from 'react';

import LoginPage from './LoginPage/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ForgotPassword from './LoginPage/ForgotPassword';
import TodoPage from './TodoPage/TodoPage';
import LogoutPage from './LogoutPage/LogoutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/todopage">
            <TodoPage />
          </Route>
          <Route path="/logoutpage">
            <LogoutPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

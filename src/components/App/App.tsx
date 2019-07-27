import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import LoginPage from '../../pages/LoginPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import DashboardPage from '../../pages/DashboardPage';
import RegisterPage from '../../pages/RegisterPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <ProtectedRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;

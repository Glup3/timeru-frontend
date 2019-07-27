import * as React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import { isAuthenticated } from '../auth';

const LoginPage = () => {
  if (isAuthenticated()) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <MainWrapper>
      <div className="flex items-center min-h-screen">
        <LoginForm />
      </div>
    </MainWrapper>
  );
};

export default LoginPage;

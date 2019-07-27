import * as React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import MainWrapper from '../components/MainWrapper/MainWrapper';

const LoginPage = () => {
  return (
    <MainWrapper>
      <div className="flex items-center min-h-screen">
        <LoginForm />
      </div>
    </MainWrapper>
  );
};

export default LoginPage;

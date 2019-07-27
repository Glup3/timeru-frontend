import React from 'react';
import { Redirect } from 'react-router-dom';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { isAuthenticated } from '../auth';

const RegisterPage = () => {
  if (isAuthenticated()) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <MainWrapper>
      <div className="flex items-center min-h-screen">
        <RegisterForm />
      </div>
    </MainWrapper>
  );
};

export default RegisterPage;

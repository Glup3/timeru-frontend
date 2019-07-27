import React from 'react';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <MainWrapper>
      <div className="flex items-center min-h-screen">
        <RegisterForm />
      </div>
    </MainWrapper>
  );
};

export default RegisterPage;

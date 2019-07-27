import React from 'react';
import { Redirect } from 'react-router-dom';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { isAuthenticated } from '../auth';
import AnimeBackground from '../components/AnimeBackground/AnimeBackground';

const RegisterPage = () => {
  if (isAuthenticated()) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <AnimeBackground>
      <MainWrapper>
        <div className="flex items-center min-h-screen">
          <RegisterForm />
        </div>
      </MainWrapper>
    </AnimeBackground>
  );
};

export default RegisterPage;

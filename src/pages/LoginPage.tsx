import * as React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import { isAuthenticated } from '../auth';
import AnimeBackground from '../components/AnimeBackground/AnimeBackground';

const LoginPage = () => {
  if (isAuthenticated()) {
    return <Redirect to="/timer" />;
  }

  return (
    <AnimeBackground>
      <MainWrapper>
        <div className="flex items-center min-h-screen">
          <LoginForm />
        </div>
      </MainWrapper>
    </AnimeBackground>
  );
};

export default LoginPage;

import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainWrapper from '../components/MainWrapper/MainWrapper';

const NotFoundPage = ({ location }: RouteComponentProps) => {
  console.log('location', location);

  return (
    <MainWrapper>
      <h1>404 Page not found</h1>
      <div>Route {location.pathname} doesn&apos;t exist</div>
    </MainWrapper>
  );
};

export default NotFoundPage;

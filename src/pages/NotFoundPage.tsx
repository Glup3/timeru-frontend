import * as React from 'react';

const NotFoundPage = ({ location }: any) => {
  return (
    <div>
      <h1>404 Page not found</h1>
      <div>You are coming from {location.pathname}</div>
    </div>
  );
};

export default NotFoundPage;

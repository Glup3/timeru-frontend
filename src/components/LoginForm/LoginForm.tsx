import * as React from 'react';
import { useLoginMutation } from '../../generated/graphql';

const LoginForm: React.FC = () => {
  const [login, { loading, data }] = useLoginMutation({
    variables: {
      credentials: {
        email: 'admin@admin.com',
        password: 'test123',
      },
    },
  });

  return (
    <div>
      <h2>Login</h2>
      <p>Message: {data && data.login && data.login.message} </p>
      <button onClick={() => login()} disabled={loading}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;

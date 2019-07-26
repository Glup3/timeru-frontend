import * as React from 'react';
import { useApolloClient } from 'react-apollo-hooks';
import { useLoginMutation } from '../../generated/graphql';
import UserData from '../UserData/UserData';
import { AUTH_TOKEN } from '../../constants';

const LoginForm: React.FC = () => {
  const client = useApolloClient();
  const [login, { loading, data, error }] = useLoginMutation({
    variables: {
      credentials: {
        email: 'admin@admin.com',
        password: 'test123',
      },
    },
  });

  const logout = () => {
    client.clearStore();
    localStorage.removeItem(AUTH_TOKEN);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error.message}</div>;
  }

  if (!data || !data.login) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => login()}
        disabled={loading}
      >
        Login
      </button>
    );
  }

  if (data.login.token) {
    localStorage.setItem(AUTH_TOKEN, data.login.token);
  }

  return (
    <div>
      <h2>Login</h2>
      <p>Message: {data.login.message} </p>
      <UserData />
      <button onClick={() => logout()} disabled={loading}>
        Logout
      </button>
    </div>
  );
};

export default LoginForm;

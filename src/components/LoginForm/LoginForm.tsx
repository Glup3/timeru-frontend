import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useLoginMutation } from '../../generated/graphql';
import { saveToken } from '../../auth';

const LoginForm: React.FC = () => {
  const [login, { loading, data, error }] = useLoginMutation({
    variables: {
      credentials: {
        email: 'admin@admin.com',
        password: 'test123',
      },
    },
  });

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
    saveToken(data.login.token);
  }

  return <Redirect to="/dashboard" />;
};

export default LoginForm;

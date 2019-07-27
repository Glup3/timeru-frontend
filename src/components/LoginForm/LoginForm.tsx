import * as React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useLoginMutation } from '../../generated/graphql';
import { saveToken, isAuthenticated } from '../../auth';
import InputField from '../InputField/InputField';
import useInput from '../../hooks/input-hook';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';

const LoginForm: React.FC = () => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
  const [login, { loading, data, error }] = useLoginMutation({
    variables: {
      credentials: {
        email,
        password,
      },
    },
  });

  const handleSubmit = event => {
    event.preventDefault();
    login();
    resetEmail();
    resetPassword();
  };

  if (isAuthenticated()) {
    return <Redirect to="/dashboard" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error.message}</div>;
  }

  if (data && data.login.token) {
    saveToken(data.login.token);
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-2">Login</h1>
        <div className="mb-4">
          <InputField label="Email" type="email" bind={bindEmail} />
        </div>
        <div className="mb-6">
          <InputField label="Password" type="password" bind={bindPassword} />
        </div>
        <div className="flex items-center justify-between">
          <SubmitButton text="Sign In" />
          <Link to="/" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

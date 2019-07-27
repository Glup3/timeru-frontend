import * as React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useLoginMutation } from '../../generated/graphql';
import { saveToken } from '../../auth';
import InputField from '../InputField/InputField';
import useInput from '../../hooks/input-hook';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';
import ErrorAlert from '../Alerts/ErrorAlert/ErrorAlert';

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

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    console.error(error);
  }

  if (data && data.login && data.login.token) {
    saveToken(data.login.token);
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="mb-8">Login</h1>
        <div className="mb-4">
          <InputField label="Email" type="email" required bind={bindEmail} />
        </div>
        <div className="mb-6">
          <InputField label="Password" type="password" required bind={bindPassword} />
        </div>
        <div className="mb-4">
          {data && data.login && !data.login.success && <ErrorAlert title="Error" description={data.login.message} />}
          {error && <ErrorAlert title="Server Error" description={error.message} />}
        </div>
        <div className="flex items-center justify-between">
          <SubmitButton text="Sign In" />
          <Link
            to="/register"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

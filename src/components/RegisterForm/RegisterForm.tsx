import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import useInput from '../../hooks/input-hook';
import InputField from '../InputField/InputField';
import { useRegisterMutation } from '../../generated/graphql';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';
import '../../css/loading-spinner.css';
import ErrorAlert from '../Alerts/ErrorAlert/ErrorAlert';
import { isNullOrWhitespace } from '../../utils/string-helper';

const RegisterForm = () => {
  const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
  const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
  const { value: username, bind: bindUsername, reset: resetUsername } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
  const { value: confirmPassword, bind: bindConfirmPassword, reset: resetConfirmPassword } = useInput('');
  const [register, { loading, data, error }] = useRegisterMutation({
    variables: {
      credentials: {
        email,
        password,
      },
      personalInfo: {
        firstName,
        lastName,
        username,
      },
    },
  });

  const handleSubmit = event => {
    event.preventDefault();
    register();

    resetFirstName();
    resetLastName();
    resetUsername();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    console.error(error);
  }

  if (data && data.register && data.register.success) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="mb-8">Sign Up</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <InputField label="Firstname" type="text" bind={bindFirstName} required={true} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <InputField label="Lastname" type="text" bind={bindLastName} required={true} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputField label="Username" type="text" bind={bindUsername} required={true} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputField label="Email" type="email" bind={bindEmail} required={true} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputField label="Password" type="password" pattern=".{6,}" bind={bindPassword} required={true} />
            <p className="text-gray-600 text-xs italic mt-3">must be atleast 6 characters long</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputField
              label="Confirm Password"
              type="password"
              pattern=".{6,}"
              bind={bindConfirmPassword}
              required={true}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-6">
          {data && data.register && !data.register.success && (
            <ErrorAlert title="Error" description={data.register.message} />
          )}
          {!isNullOrWhitespace(confirmPassword) && password !== confirmPassword && (
            <ErrorAlert title="Passwords do not match" description="Passwords must match!" />
          )}
        </div>
        <div className="flex items-center justify-between">
          <SubmitButton text="Register" disabled={password !== confirmPassword} />
          <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

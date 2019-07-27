import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import useInput from '../../hooks/input-hook';
import InputField from '../InputField/InputField';
import { useRegisterMutation } from '../../generated/graphql';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';
import '../../css/loading-spinner.css';

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
    return <div>Error {error.message}</div>;
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="mb-8">Sign Up</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <InputField label="Firstname" type="text" bind={bindFirstName} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <InputField label="Lastname" type="text" bind={bindLastName} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputField label="Username" type="text" bind={bindUsername} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputField label="Email" type="email" bind={bindEmail} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputField label="Password" type="password" bind={bindPassword} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputField label="Confirm Password" type="password" bind={bindConfirmPassword} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <SubmitButton text="Register" />
          <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

import React from 'react';

interface SubmitButtonPropsType {
  text: string;
  disabled?: boolean;
}

const SubmitButton = ({ text, disabled }: SubmitButtonPropsType) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
        disabled ? 'cursor-not-allowed' : ''
      }`}
      type="submit"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SubmitButton;

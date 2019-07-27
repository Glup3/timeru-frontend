import React from 'react';

interface SubmitButtonPropsType {
  text: string;
}

const SubmitButton = ({ text }: SubmitButtonPropsType) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      {text}
    </button>
  );
};

export default SubmitButton;

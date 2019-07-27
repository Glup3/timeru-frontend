import React from 'react';

interface InputFieldPropsType {
  label: string;
  type: string;
  bind: any;
  required?: boolean;
  pattern?: string;
}

const InputField = ({ label, type, bind, required, pattern }: InputFieldPropsType) => {
  return (
    <>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={label.toLowerCase()}
        placeholder={label}
        type={type}
        required={required}
        pattern={pattern}
        {...bind}
      />
    </>
  );
};

export default InputField;

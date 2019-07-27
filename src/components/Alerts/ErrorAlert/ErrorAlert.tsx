import React from 'react';

interface ErrorAlertPropsType {
  title: string;
  description?: string;
}

const ErrorAlert = ({ title, description }: ErrorAlertPropsType) => {
  return (
    <div className="w-full" role="alert">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">{title}</div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ErrorAlert;

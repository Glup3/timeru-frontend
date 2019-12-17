import React, { useState, useContext } from 'react';

import TimeEntryContext from '../../context';

const TitleInputField = () => {
  const [title, setTitle] = useState('');
  const timeEntryContext = useContext(TimeEntryContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    timeEntryContext.title = e.target.value;
  };

  return (
    <input
      className="flex-1 ml-4 p-2 outline-none border-gray-300 border-2 rounded"
      placeholder="What did you do?"
      value={title}
      onChange={onChange}
    />
  );
};

export default TitleInputField;

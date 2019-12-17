import React, { useContext } from 'react';
import TimeEntryContext from '../../context';

const EntryDetails = () => {
  const { selectedEntry } = useContext(TimeEntryContext);

  if (!selectedEntry) {
    return <div>OOF</div>;
  }

  const { title, start, end, valuable, description } = selectedEntry;
  // TODO style this form

  return (
    <div>
      <h2>{title}</h2>
      <p></p>
      <span>{`${start} - ${end}`}</span>
      <p>valuable? {valuable ? 'yep' : 'nope'}</p>
      <p>{description}</p>
    </div>
  );
};

export default EntryDetails;

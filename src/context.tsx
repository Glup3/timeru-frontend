import React from 'react';
import { TimeEntry } from './generated/graphql';

interface TimeEntryContextProps {
  selectedEntry: TimeEntry;
  title: string;
}

const TimeEntryContext = React.createContext<TimeEntryContextProps>({
  selectedEntry: null,
  title: '',
});

export default TimeEntryContext;

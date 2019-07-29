import React from 'react';
import { TimeEntry } from './generated/graphql';

interface TimeEntryContextProps {
  selectedEntry: TimeEntry;
}

const TimeEntryContext = React.createContext<TimeEntryContextProps>({
  selectedEntry: null,
});

export default TimeEntryContext;

import React, { useState, useContext } from 'react';
import { Calendar } from 'react-big-calendar';
import Modal from 'react-responsive-modal';

import EntryDetails from '../EntryDetails/EntryDetails';
import { useTimeEntriesQuery, TimeEntry } from '../../generated/graphql';
import { localizer, startDay, endDay, formats } from './calendarHelper';
import TimeEntryContext from '../../context';

import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import '../../css/calendar.css';

const CalendarView = () => {
  const [open, setOpen] = useState(false);
  const timeEntryContext = useContext(TimeEntryContext);
  const { data, loading, error, refetch } = useTimeEntriesQuery({
    variables: {
      start: startDay,
      end: endDay,
    },
    fetchPolicy: 'network-only',
  });

  if (error) {
    console.log(error);
    return <div>ERROR: {error.message}</div>;
  }

  const eventPropGetter = (event: any) => {
    return {
      style: {
        backgroundColor: event.project ? event.project.color : '#585858',
      },
    };
  };

  const onRangeChange = (dates: any) => {
    refetch({
      start: dates[0],
      end: dates[6],
    });
  };

  const onClickTimeEntry = (event: TimeEntry) => {
    timeEntryContext.selectedEntry = event;
    setOpen(!open);
  };

  console.log('loading', data);

  return (
    <>
      {loading && <div className="loader"></div>}

      <Modal open={open} onClose={() => setOpen(false)} center showCloseIcon={false} focusTrapped={false}>
        <EntryDetails />
      </Modal>

      <Calendar
        localizer={localizer}
        events={(data && data.timeEntries) || []}
        defaultView="week"
        views={['week']}
        formats={formats}
        onRangeChange={onRangeChange}
        min={new Date(0, 0, 0, 0, 0)}
        startAccessor={(event: TimeEntry) => new Date(event.start)}
        endAccessor={(event: TimeEntry) => (event.end != null ? new Date(event.end) : new Date())}
        eventPropGetter={eventPropGetter}
        onSelectEvent={onClickTimeEntry}
        step={15}
        timeslots={4}
      />
    </>
  );
};

export default CalendarView;

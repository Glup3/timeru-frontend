import React, { useState, useContext } from 'react';
import { Calendar, momentLocalizer, Localizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-responsive-modal';
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import TimeEntryContext from '../../context';
import { useTimeEntriesQuery, TimeEntry } from '../../generated/graphql';
import EntryDetails from '../EntryDetails/EntryDetails';

const localizer = momentLocalizer(moment);

const formats = {
  timeGutterFormat: (date: Date, _: string, loci: Localizer) => loci.format(date, 'HH:mm'),
  dayRangeHeaderFormat: ({ start, end }, _: string, loci: Localizer) =>
    `✿ ${loci.format(start, 'DD MMMM')} - ${loci.format(end, 'DD MMMM YYYY')} ✿`,
  eventTimeRangeFormat: ({ start, end }, _: string, loci: Localizer) =>
    `${loci.format(start, 'HH:mm')} - ${loci.format(end, 'HH:mm')}`,
};

const start = moment()
  .day(0)
  .second(0)
  .minute(0)
  .hour(0);

const end = moment()
  .day(6)
  .second(0)
  .minute(0)
  .hour(0);

const CalendarView = () => {
  const [open, setOpen] = useState(false);
  const timeEntryContext = useContext(TimeEntryContext);
  const { data, loading, error, refetch } = useTimeEntriesQuery({
    variables: {
      start,
      end,
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
        backgroundColor: event.project ? event.project.color : '#404040',
      },
    };
  };

  const onRangeChange = (props: any) => {
    refetch({
      start: props[0],
      end: props[6],
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
      />
    </>
  );
};

export default CalendarView;

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const formats = {
  timeGutterFormat: (date, _, loci) => loci.format(date, 'HH:mm'),
  dayRangeHeaderFormat: ({ start, end }, _, loci) =>
    `\\ ${loci.format(start, 'DD MMMM')} - ${loci.format(end, 'DD MMMM YYYY')} /`,
  eventTimeRangeFormat: ({ start, end }, _, loci) => `${loci.format(start, 'HH:mm')} - ${loci.format(end, 'HH:mm')}`,
};

const now = new Date();

const events = [
  {
    id: 0,
    title: 'Arbeiten',
    start: now,
    end: new Date(now.setHours(now.getHours() + 2)),
  },
  {
    id: 1,
    title: 'Arbeiten',
    start: new Date(new Date()),
    end: new Date(new Date().setHours(new Date().getHours() + 6)),
  },
  {
    id: 2,
    title: 'what',
    start: new Date(now.setDate(now.getDate() + 1)),
    end: new Date(now.setDate(now.getDate() + 1)),
  },
];

const CalendarView = () => {
  const onRangeChange = (props: any) => {
    console.log('navi', props);
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      defaultView="week"
      views={['week']}
      formats={formats}
      onRangeChange={onRangeChange}
      min={new Date(0, 0, 0, 5, 0)}
      startAccessor="start"
      endAccessor="end"
    />
  );
};

export default CalendarView;

import moment from 'moment';
import { momentLocalizer, DateRange } from 'react-big-calendar';

// start week with Monday
moment.locale('de', {
  week: {
    dow: 1,
    doy: 1,
  },
});

export const localizer = momentLocalizer(moment);

export const formats = {
  timeGutterFormat: (date: Date, culture: string, loci) => loci.format(date, 'HH:mm', culture),
  dayRangeHeaderFormat: ({ start, end }: DateRange, culture: string, loci) =>
    `✿ ${loci.format(start, 'DD MMMM', culture)} - ${loci.format(end, 'DD MMMM YYYY', culture)} ✿`,
  eventTimeRangeFormat: ({ start, end }: DateRange, culture: string, loci) =>
    `${loci.format(start, 'HH:mm', culture)} - ${loci.format(end, 'HH:mm', culture)}`,
};

// Monday
export const startDay = moment()
  .day(1)
  .second(0)
  .minute(0)
  .hour(0)
  .toDate();

// Sunday
export const endDay = moment()
  .day(7)
  .second(0)
  .minute(0)
  .hour(0)
  .toDate();

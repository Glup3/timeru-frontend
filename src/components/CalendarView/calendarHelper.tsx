import moment from 'moment';
import { momentLocalizer, DateRange } from 'react-big-calendar';

export const localizer = momentLocalizer(moment);

export const formats = {
  timeGutterFormat: (date: Date, culture: string, loci) => loci.format(date, 'HH:mm', culture),
  dayRangeHeaderFormat: ({ start, end }: DateRange, culture: string, loci) =>
    `✿ ${loci.format(start, 'DD MMMM', culture)} - ${loci.format(end, 'DD MMMM YYYY', culture)} ✿`,
  eventTimeRangeFormat: ({ start, end }: DateRange, culture: string, loci) =>
    `${loci.format(start, 'HH:mm', culture)} - ${loci.format(end, 'HH:mm', culture)}`,
};

export const startDay = moment()
  .day(0)
  .second(0)
  .minute(0)
  .hour(0)
  .toDate();

export const endDay = moment()
  .day(6)
  .second(0)
  .minute(0)
  .hour(0)
  .toDate();

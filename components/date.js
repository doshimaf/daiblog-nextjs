import { parseISO, format } from 'date-fns';

function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>;
}

function UpDate({ dateString }) {
  const update = parseISO(dateString);
  return <time dateTime={dateString}>{format(update, 'yyyy-MM-dd')}</time>;
}

export {Date, UpDate};
import moment from 'moment';

export default function getDateTime() {
  const date = format => moment().format(format);

  return {
    hour: date('HH'),
    minute: date('mm'),
    dayOfWeek: date('dddd'),
    date: date('MM.DD.YYYY')
  };
}

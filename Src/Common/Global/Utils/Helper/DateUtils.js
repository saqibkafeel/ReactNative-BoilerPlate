import moment from 'moment';

export const formatDate = (date) => {
  const _date = new Date(date);
  const formattedDate =
    _date.getFullYear() +
    '-' +
    ('0' + (_date.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + _date.getUTCDate()).slice(-2);
  return formattedDate;
};

export const formatTime = (date) => {
  const _date = new Date(date);
  const formattedTime =
    ('0' + _date.getHours()).slice(-2) +
    ':' +
    ('0' + _date.getMinutes()).slice(-2) +
    ':' +
    '00';
  return formattedTime;
};
export const gettimeFromNow = (date) => {
  moment.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: (number) => number + 's ago',
      ss: '%ds ago',
      m: '1m ago',
      mm: '%dm ago',
      h: '1h ago',
      hh: '%dh ago',
      d: '1d ago',
      dd: '%dd ago',
      M: 'a month ago',
      MM: '%d months ago',
      y: 'a year ago',
      yy: '%d years ago',
    },
  });
  return moment(date).fromNow(true);
};
export const timeDifference = (current, previous) => {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    const value = Math.round(elapsed / msPerDay);
    if (value === 1) {
      return Math.round(elapsed / msPerDay) + ' day ago';
    }
    return value + ' days ago';
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return Math.round(elapsed / msPerYear) + ' years ago';
  }
};

export const formatDateAndTime = (date) => {
  const d = moment(date).toDate();
  return isToday(d)
    ? 'Today ' + getFormatedDate(date)
    : '' +
        d.getDate() +
        ' ' +
        getMonth(d.getMonth()) +
        ' ' +
        isCurrentYear(d) +
        getFormatedDate(date);
};

export const formattedDate = (date) => {
  const d = moment(date).toDate();
  return isToday(d)
    ? 'Today ' + getTime(d)
    : '' + d.getDate() + ' ' + getMonth(d.getMonth()) + ' ' + d.getFullYear();
};

const isCurrentYear = (date) => {
  const d = new Date();

  let year = '';

  if (d.getFullYear() !== date.getFullYear()) {
    year = date.getFullYear() + ' ';
  } else {
    year = '';
  }

  return year;
};

export const isToday = (date) => {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const getMonth = (month_number) => {
  const month = new Array(12);
  month[0] = 'Jan';
  month[1] = 'Feb';
  month[2] = 'Mar';
  month[3] = 'Apr';
  month[4] = 'May';
  month[5] = 'Jun';
  month[6] = 'Jul';
  month[7] = 'Aug';
  month[8] = 'Sep';
  month[9] = 'Oct';
  month[10] = 'Nov';
  month[11] = 'Dec';
  return month[month_number];
};

const getTime = (date) => {
  let hours = date.getHours();
  let min = date.getMinutes();

  return hours + ':' + min;
};

export const getFormatedDate = (date) => {
  moment.locale('en');
  var dt = date;
  return moment(dt).format('HH:mm');
};

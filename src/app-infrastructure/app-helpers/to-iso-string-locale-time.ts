import moment from 'moment';

const toISOStringLocaleTime = (
  arg: Date | string | number | null | undefined
) => {
  if (arg === null || arg === undefined) return '';

  const m = moment(arg);
  if (!m.isValid()) return '';

  const date = m.toDate();
  const tzOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - tzOffset).toISOString().slice(0, -1);
};

export default toISOStringLocaleTime;

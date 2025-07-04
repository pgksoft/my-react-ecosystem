import moment from 'moment';

const toISOStringLocaleTime = (arg: Date | null) => {
  if (arg !== null && moment(arg).isValid()) {
    const tzOffset = arg.getTimezoneOffset() * 60000;
    return new Date(arg.getTime() - tzOffset).toISOString().slice(0, -1);
  }
  return '';
};

export default toISOStringLocaleTime;

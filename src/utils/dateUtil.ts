// MARK: Timestamps
export const getNowTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

export const getXDaysAgoTimestamp = (daysToSubtract: number) => {
  return Math.floor((Date.now() - daysToSubtract * 24 * 60 * 60 * 1000) / 1000);
};

export const getLastMonthTimestamp = () => {
  var date = new Date();
  var month = date.getMonth();
  date.setMonth(date.getMonth() - 1);

  // If still in same month, set date to last day of previous month
  if (date.getMonth() === month) {
    date.setDate(0);
  }
  date.setHours(0, 0, 0, 0);

  // Get the time value in milliseconds and convert to seconds
  return Math.floor(date / 1000);
};

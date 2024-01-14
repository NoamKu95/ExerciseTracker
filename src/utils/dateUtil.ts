export const getDayFromStringDate = (pickedDate: string) => {
  return (
    pickedDate.split('-')[0].slice(0, 2) || new Date().getDate().toString()
  );
};

export const getMonthFromStringDate = (pickedDate: string) => {
  return pickedDate.split('-')[1] || (new Date().getMonth() + 1).toString();
};

export const getYearFromStringDate = (pickedDate: string) => {
  return pickedDate.split('-')[2] || new Date().getFullYear().toString();
};

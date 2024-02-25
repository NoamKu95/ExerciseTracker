export interface TimePeriod {
  name: string;
  amountOfDays: number;
  startDate: Date;
  endDate: Date;
}

export const defaultTimePeriod: TimePeriod = {
  name: 'Day',
  amountOfDays: 1,
  startDate: new Date(),
  endDate: new Date(),
};

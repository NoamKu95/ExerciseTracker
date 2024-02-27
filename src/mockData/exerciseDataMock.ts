import {subDays} from 'date-fns';
import {ExerciseDayData} from '../models/core/exercise';

export const exerciseLastMonthData: ExerciseDayData[] = [
  {date: new Date(), weight: 60},
  {date: subDays(new Date(), 3), weight: 58},
  {date: subDays(new Date(), 5), weight: 55},
  {date: subDays(new Date(), 7), weight: 55},
  {date: subDays(new Date(), 12), weight: 52.5},
  {date: subDays(new Date(), 18), weight: 52.5},
  {date: subDays(new Date(), 23), weight: 52.5},
];

export const exerciseLast3MonthsData: ExerciseDayData[] = [
  {date: new Date(), weight: 60},
  {date: subDays(new Date(), 3), weight: 58},
  {date: subDays(new Date(), 5), weight: 55},
  {date: subDays(new Date(), 7), weight: 55},
  {date: subDays(new Date(), 12), weight: 52.5},
  {date: subDays(new Date(), 18), weight: 52.5},
  {date: subDays(new Date(), 23), weight: 52.5},
  {date: subDays(new Date(), 40), weight: 50},
  {date: subDays(new Date(), 43), weight: 47},
  {date: subDays(new Date(), 50), weight: 47},
  {date: subDays(new Date(), 63), weight: 45},
  {date: subDays(new Date(), 70), weight: 42},
  {date: subDays(new Date(), 83), weight: 42.5},
  {date: subDays(new Date(), 87), weight: 42.5},
];

export const exerciseLast6MonthsData: ExerciseDayData[] = [
  {date: new Date(), weight: 60},
  {date: subDays(new Date(), 3), weight: 58},
  {date: subDays(new Date(), 5), weight: 55},
  {date: subDays(new Date(), 7), weight: 55},
  {date: subDays(new Date(), 12), weight: 52.5},
  {date: subDays(new Date(), 18), weight: 52.5},
  {date: subDays(new Date(), 23), weight: 52.5},
  {date: subDays(new Date(), 40), weight: 50},
  {date: subDays(new Date(), 43), weight: 47},
  {date: subDays(new Date(), 50), weight: 47},
  {date: subDays(new Date(), 63), weight: 45},
  {date: subDays(new Date(), 70), weight: 42},
  {date: subDays(new Date(), 83), weight: 42.5},
  {date: subDays(new Date(), 87), weight: 42.5},
  {date: subDays(new Date(), 95), weight: 40.5},
  {date: subDays(new Date(), 104), weight: 38},
  {date: subDays(new Date(), 110), weight: 38},
  {date: subDays(new Date(), 116), weight: 36.5},
  {date: subDays(new Date(), 123), weight: 36},
  {date: subDays(new Date(), 126), weight: 32},
  {date: subDays(new Date(), 140), weight: 32},
  {date: subDays(new Date(), 135), weight: 30},
];

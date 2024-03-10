import axios from 'axios';
import {paths} from '../constants/network/apiPaths';

export const fetchWorkoutHistoryApi = async (
  page: number,
  limit: number,
): Promise<void> => {
  return await axios.post(paths.WORKOUT_HISTORY, {page, limit});
};

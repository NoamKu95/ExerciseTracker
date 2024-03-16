// Constants
import {exerciseLast3MonthsData} from '../mockData/exerciseDataMock';
// Models
import {ExerciseProgressResponse} from '../models/networkingObjects/responses/exerciseResponse';

// ** PROGRESS **
export const fetchProgressDataApi = async (
  exerciseID: string,
  period: TimePeriod,
): Promise<ExerciseProgressResponse> => {
  return exerciseLast3MonthsData;
  // return await axios.post(paths.PROGRESS_DATA, {exerciseID, period});
};

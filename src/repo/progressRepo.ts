// Models
import {ExerciseProgressPayload} from '../models/networkingObjects/payloads/exerciseProgressPayload';
import {ExerciseProgressResponse} from '../models/networkingObjects/responses/exerciseResponse';
// Redux
import {fetchProgressDataApi} from '../apiControllers/progressApi';

// ** PROGRESS **
export const fetchProgressDataRepo = async (
  payload: ExerciseProgressPayload,
): Promise<ExerciseProgressResponse> => {
  return await fetchProgressDataApi(payload.exerciseID, payload.period);
};

import {fetchWorkoutHistoryApi} from '../apiControllers/workoutApi';
import {WorkoutHistoryPayload} from '../models/networkingObjects/payloads/workoutHistoryPayload';

export const fetchWorkoutHistoryRepo = async (
  payload: WorkoutHistoryPayload,
): Promise<void> => {
  return await fetchWorkoutHistoryApi(payload.page, payload.limit);
};

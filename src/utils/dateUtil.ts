// MARK: Timestamps
export const getNowTimestamp = (): number => {
  return Math.floor(Date.now() / 1000);
};

export const getXDaysAgoTimestamp = (daysToSubtract: number): number => {
  return Math.floor((Date.now() - daysToSubtract * 24 * 60 * 60 * 1000) / 1000);
};

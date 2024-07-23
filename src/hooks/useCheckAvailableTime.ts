function useCheckAvailableTime() {
  const checkAvailableTime = (
    availableStartTime: string,
    availableEndTime: string,
    now: Date
  ) => {
    const [startHour, startMinute, startSecond] = availableStartTime
      .split(":")
      .map(Number);
    const [EndHour, EndMinute, EndSecond] = availableEndTime
      .split(":")
      .map(Number);

    const startTime = new Date();
    startTime.setHours(startHour, startMinute, startSecond);

    const endTime = new Date();
    endTime.setHours(EndHour, EndMinute, EndSecond);

    return startTime <= now && endTime >= now;
  };
  return {checkAvailableTime};
}

export default useCheckAvailableTime;
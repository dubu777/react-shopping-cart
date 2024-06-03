// hh:mm:ss -> 오전/오후 h시 m분 s초
export const changeTimeStringToKorean = (timeString: string, withPeriod: boolean) => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);

  const period = hours < 12 ? "오전" : "오후";
  const hourIn12 = hours % 12 === 0 ? 12 : hours % 12;

  const hourInKorean = `${hourIn12}시`;
  const minuteInKorean = minutes === 0 ? "" : `${minutes}분`;
  const secondsInKorean = seconds === 0 ? "" : `${seconds}초`;

  return `${withPeriod ? period : ""} ${hourInKorean} ${minuteInKorean} ${secondsInKorean}`.trim();
};

export const getCouponAvailableTimeString = (startTime: string, endTime: string) => {
  const startHour = startTime.split(":").map(Number)[0];
  const endHour = endTime.split(":").map(Number)[0];

  if ((startHour < 12 && endHour < 12) || (startHour > 12 && endHour > 12)) {
    return `${changeTimeStringToKorean(startTime, true)}부터 ${changeTimeStringToKorean(endTime, false)}까지`;
  }

  return `${changeTimeStringToKorean(startTime, true)}부터 ${changeTimeStringToKorean(endTime, true)}까지`;
};

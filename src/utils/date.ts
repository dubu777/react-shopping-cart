function getDateDetail(dateString: Date | string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return {year, month, day}
}

function getDateLocaleFormat(dateString: Date | string) {
  const {year, month, day} = getDateDetail(dateString)
  return `${year}년 ${month}월 ${day}일`
}

function getTimeLocaleFormat(time: string) {
  const [hour, minute] = time.split(':').map(Number)
  const amOrPm = hour >= 12 ? '오후' : '오전'
  const fomattedHour = hour % 12 || 12;
  if (minute) {
    return `${amOrPm} ${fomattedHour}시 ${minute}분`
  } else {
    return `${amOrPm} ${fomattedHour}시`
  }
}

export {getDateLocaleFormat, getTimeLocaleFormat}
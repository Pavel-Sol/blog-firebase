// преобразует дату из миллесекунд в  dd/mm/yy HH:MM:SS
export const changeDateFormat = (milliseconds) => {
  const monthList = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  let dateString = new Date(milliseconds).toString();
  let dateArray = dateString.split(' ');

  return `${dateArray[2]}/${monthList[dateArray[1]]}/${dateArray[3]} ${dateArray[4]}`;
};

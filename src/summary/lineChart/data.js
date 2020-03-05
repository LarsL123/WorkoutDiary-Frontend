import httpService from "../../common/services/httpService";
import getWeekNumber from "../../common/utils/date";

export default async function getChartLine(fromDate, toDate) {
  const { data } = await httpService.get(`/workouts/${fromDate}/${toDate}`);

  if (!data) return [];

  let processedData = [];
  for (let i = 0; i < 53; i++) {
    processedData[i] = { week: i, minutes: 0 };
  }

  data.forEach(workout => {
    let minutes = 0;
    for (let i = 1; i <= 7; i++) minutes += workout.zones[i];

    const [week] = getWeekNumber(new Date(workout.date));

    processedData[week].minutes += minutes;
  });

  for (let i = 2; i < processedData.length; i++)
    processedData[i].minutes += processedData[i - 1].minutes; //Sum up.

  for (let i = 1; i < processedData.length; i++) processedData[i].minutes /= 60; //Convert to hours.

  return processedData;
}

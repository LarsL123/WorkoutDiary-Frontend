import httpService from "../../common/services/httpService";

export default async function getZoneData(fromDate, toDate) {
  const { data } = await httpService.get(`/workouts/${fromDate}/${toDate}`);

  if (!data) return [];

  let processedData = [
    { zone: "1", minutes: 0 },
    { zone: "2", minutes: 0 },
    { zone: "3", minutes: 0 },
    { zone: "4", minutes: 0 },
    { zone: "5", minutes: 0 },
    { zone: "6", minutes: 0 },
    { zone: "7", minutes: 0 },
  ];

  data.forEach(workout => {
    for(let i = 0; i < 7; i++){
        processedData[i].minutes += workout.zones[i + 1]; 
    }
  });

  return processedData;
}

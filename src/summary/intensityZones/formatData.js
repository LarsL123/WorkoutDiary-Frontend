import httpService from "../../common/services/httpService";

export default async function getZoneData(fromDate, toDate) {
  const { data } = await httpService.get(`/workouts/${fromDate}/${toDate}`);

  console.log(data)

  if (!data) return [];

  let processedData = [
    { x: "1", y: 0 },
    { x: "2", y: 0 },
    { x: "3", y: 0 },
    { x: "4", y: 0 },
    { x: "5", y: 0 },
    { x: "6", y: 0 },
    { x: "7", y: 0 },
  ];

  data.forEach(workout => {
    for(let i = 0; i < 7; i++){
        processedData[i].y += workout.zones[i + 1]; 
    }
  });

  return processedData;
}

import http from "../../common/services/httpService";

const apiEndpoint = "/workouts";

//TODO: Optimistic insertion, aka add and rerender before request has arrived.

export default async function createWorkout(data, setData, date) {
  try {
    const response = await http.post(apiEndpoint, { date: new Date(date) });
    const _id = response.data._id;

    const workout = {
      _id,
      date: date,
      description: " ",
      type: " ",
      zones: {
        1: " ",
        2: " ",
        3: " ",
        4: " ",
        5: " ",
      },
    };

    let index = -1;
    while (index++ < data.length)
      if (new Date(data[index].date) - new Date(date) <= 0) break;

    data.splice(index, 0, workout);
    setData([...data]);
    
  } catch (error) {
    console.log(error); //TODO: Implement logger / expose user of error.
  }
}

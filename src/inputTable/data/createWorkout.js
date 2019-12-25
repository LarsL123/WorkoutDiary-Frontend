import http from "../../common/services/httpService";

const apiEndpoint = "/workouts";

export default async function createWorkout(data, setData, date) {
  try {
    const response = await http.post(apiEndpoint);
    const _id = response.data._id;

    data.unshift({
      _id,
      date: date,
      description: " ",
      type: " ",
      zones: {
        1: " ",
        2: " ",
        3: " ",
        4: " ",
        5: " "
      }
    });

    setData([...data]);
  } catch (error) {
    console.log(error); //Implement logger/ expose user of error.
  }
}

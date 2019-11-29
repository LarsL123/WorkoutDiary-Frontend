import http from "../../services/httpService";

const apiEndpoint = "/workouts";

export default async function createWorkout() {
  try {
    const response = await http.post(apiEndpoint);
    console.log("yay created");
    return response.data._id;
  } catch (error) {
    //TODO ---Remove workout form array
    console.log(error); //Implement logger/ expose user of error.
  }
}

import http from "../../services/httpService";

const apiEndpoint = "/workouts";

export default function deleteWorkout(_id) {
  http.delete(`${apiEndpoint}/${_id}`).then(
    response => {
      console.log(response);
    },
    error => {
      //Implement logger/ expose user of error.
      console.log(error);
    }
  );
}

import http from "../../common/services/httpService";

const apiEndpoint = "/workouts";

export default function deleteWorkout(data, setData, _id) {
  if (!data) return;

  let element;
  let i;

  for (i = 0; i < data.length; i++) {
    element = data[i];
    if (element._id === _id) {
      data.splice(i, 1);
      break;
    }
  }

  setData([...data]);

  http.delete(`${apiEndpoint}/${_id}`).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      data.splice(i, 0, element); //Add element back if deletion was unsuccessful.
      setData([...data]);
      console.log(error); //Implement logger/ expose user of error.
    }
  );
}

import httpService from "../../common/services/httpService";

const endpoint = "/workouts";

export default function updateWorkout(data) {
  const _id = data.getAttribute("_id");
  const children = data.children;

  const dataOut = {
    date: new Date(children[1].firstElementChild.firstElementChild.value),
    description: children[2].textContent,
    type: children[3].textContent,
    zones: {
      1: children[4].textContent || 0,
      2: children[5].textContent || 0,
      3: children[6].textContent || 0,
      4: children[7].textContent || 0,
      5: children[8].textContent || 0
    }
  };
  console.log("The data to be sendt:", dataOut);

  send(_id, dataOut);
}

function send(_id, data) {
  httpService.put(`${endpoint}/${_id}`, data).then(
    response => {
      console.log(response);
    },
    error => {
      //Implement logger/ expose user of error.
      console.log(error);
    }
  );
}

import httpService from "../../common/services/httpService";

const apiEndpoint = "/workouts";

async function fetch() {
  const obj = await httpService.get(apiEndpoint);
  return obj.data;
}

function format(workouts) {
  workouts.forEach(element => {
    const zones = element.zones;
    const values = Object.values(zones);
    for (let i = 1; i <= 5; i++) {
      if (values[i] === 0) {
        values[i] = " ";
      }
    }
    element.zones = values;
  });
}

export default async function getRows() {
  let workouts = await fetch();
  format(workouts);
  return workouts;
}

/*
new Date(element.date)
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");

    console.log(element.date); */

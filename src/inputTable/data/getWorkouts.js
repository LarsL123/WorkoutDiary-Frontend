import httpService from "../../common/services/httpService";

const apiEndpoint = "/workouts";

async function fetch() {
  const obj = await httpService.get(apiEndpoint);
  return obj.data;
}

function format(workouts) {
  // workouts.forEach(element => {
  //   const zones = element.zones;
  //   const values = Object.values(zones);
  //   values.forEach(value => {
  //     console.log("did it", value, value === 0);
  //     if (value === 0) {
  //       value = " ";
  //     }
  //   });
  //   zones = RIP :-/
  // });
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

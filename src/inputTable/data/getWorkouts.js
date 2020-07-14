import httpService from "../../common/services/httpService";

const apiEndpoint = "/workouts";

export default async function getWorkouts() {
  let workouts = await fetch();
  format(workouts);
  return workouts;
}

async function fetch() {
  const obj = await httpService.get(apiEndpoint);
  return obj.data;
}

function format(workouts) {
  removeZeroes(workouts);
}

function removeZeroes(workouts) {
  workouts.forEach((element) => {
    const zones = element.zones;
    if (!zones) return;

    for (let i = 1; i <= 5; i++) {
      if (zones[i] === 0) {
        zones[i] = " ";
      }
    }
  });
}

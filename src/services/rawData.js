import httpService from "./httpService";

const apiEndpoint = "/workouts";
let workouts = [];

export async function getRows() {
  if (workouts.length < 1) {
    await fetch();
    format();
  }
  return workouts;
}

async function fetch() {
  const obj = await httpService.get(apiEndpoint);
  workouts = obj.data;
}

function format() {
  workouts.forEach(element => {
    element.date = new Date(element.date)
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");
  });
}

import httpService from "../../services/httpService";

const apiEndpoint = "/workouts";

async function fetch() {
  const obj = await httpService.get(apiEndpoint);
  return obj.data;
}

function format(workouts) {
  workouts.forEach(element => {
    const date = new Date(element.date);
    const newFormat =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    element.date = newFormat;
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

import httpService from "../services/httpService";

const apiEndpoint = "/workouts";
let workouts = [];

export default async function getRows() {
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
    const date = new Date(element.date);
    const newFormat =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    element.date = newFormat;
  });
}

/*
new Date(element.date)
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");

    console.log(element.date); */

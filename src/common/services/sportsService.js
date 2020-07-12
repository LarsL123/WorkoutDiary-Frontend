import httpService from "./httpService";

const apiEndpoint = "/sports";

//TODO: Make this into a custom hook :-)

let sports = null;

async function getSports() {
  if (sports) return sports;

  try {
    const response = await httpService.get(apiEndpoint);
    sports = response.data;
  } catch (error) {
    console.log("Was not able to load sports: ");
    console.log(error);
  }

  return sports;
}

async function deleteSport(sportId) {
  sports = null;
  await httpService.delete(`${apiEndpoint}/${sportId}`);
}

async function addSport(sportName) {
  sports = null;
  await httpService.post(`${apiEndpoint}`, { name: sportName });
}

export default { getSports, deleteSport, addSport };

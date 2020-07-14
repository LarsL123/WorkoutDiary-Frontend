import { useEffect, useState } from "react";
import httpService from "../services/httpService";

const apiEndpoint = "/sports";

let cache; //Is there a hook so i can define it inside the function and still share a mutable value?

export const useSports = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    if (sports.length !== 0) return;

    let cancelIfUnmouted = false;

    const fetchData = async () => {
      if (cache) {
        const data = await cache;
        return setSports(data);
      }

      cache = new Promise(async (resolve, reject) => {
        let data;

        try {
          const response = await httpService.get(apiEndpoint);
          data = response.data;
        } catch (error) {
          data = [];
          console.error("Was not able to load sports: ", error); //TODO: Change to custom logger/expose to user.
        }

        resolve(data);
        if (cancelIfUnmouted) return;
        setSports(data);
      });
    };
    fetchData();

    return function cleanup() {
      cancelIfUnmouted = true;
    };
  });

  const deleteSport = async (sportId) => {
    await httpService.delete(`${apiEndpoint}/${sportId}`);
    cache = null;
    setSports([]);
  };

  const addSport = async (sportName) => {
    await httpService.post(`${apiEndpoint}`, { name: sportName });
    cache = null;
    setSports([]);
  };

  return [sports, addSport, deleteSport];
};

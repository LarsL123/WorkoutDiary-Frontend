import { useEffect, useState } from "react";
import httpService from "../services/httpService";

const apiEndpoint = "/sports";

let cache;

export const useSports = () => {
  const [sports, setSports] = useState([]);
  console.log(cache, sports);

  useEffect(() => {
    if (sports.length !== 0) return;

    // let cancelRequest = false;

    const fetchData = async () => {
      if (cache) {
        const data = await cache;
        console.log("setting sports");
        return setSports(data);
      }

      cache = new Promise(async (resolve, reject) => {
        try {
          const response = await httpService.get(apiEndpoint);
        //   if (cancelRequest) return;
          setSports(response.data);
          resolve(response.data);
        } catch (error) {
          console.log("Was not able to load sports: ");
          console.log(error);
        }
      });
    };
    fetchData();

    // return function cleanup() {
    //   cancelRequest = true;
    // };
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

import { useEffect, useState } from "react";

const useFetch = (asyncCall, args, defaultValue = undefined) => {
  const [data, updateData] = useState(defaultValue);

  useEffect(() => {
    async function fetchData() {
      const response = await asyncCall();
      updateData(response);
    }
    fetchData();
  }, [asyncCall]);

  
  return [data, updateData];
};

export default useFetch;

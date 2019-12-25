import { useEffect, useState } from "react";

export default useFetch = (call, args) => {
  const [data, updateData] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const response = await call(...args);

      updateData(response);
    }
    fetchData();
  }, [call]);

  return data;
};

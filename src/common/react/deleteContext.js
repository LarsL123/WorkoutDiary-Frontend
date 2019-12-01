import { createContext } from "react";

export const DeleteContext = createContext(() => {
  console.log("No delete function set");
});

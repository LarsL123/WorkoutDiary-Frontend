import { createContext } from "react";

export const AddContext = createContext(() => {
  console.log("No create function set");
});

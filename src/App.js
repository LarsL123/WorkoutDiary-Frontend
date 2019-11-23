import React from "react";
import "./App.css";
import InputTable from "./scrollTable/inputTable";
import httpService from "./services/httpService";

function App() {
  httpService.setJwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGQ5MmE5NDhiZjM3MTM3Y2NhOWVmNmMiLCJpYXQiOjE1NzQ1MTQzNDZ9.PAAJY4ynOuiDgerIbe67V_YlgOuo6T2Tgeei_CDS7lg"
  ); //Hardcoded token. Remove as fast as possivble
  return (
    <div className="App">
      <div>
        <InputTable></InputTable>
      </div>
    </div>
  );
}

export default App;

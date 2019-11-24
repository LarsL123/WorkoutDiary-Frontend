import React from "react";
import "./App.css";
import InputTable from "./scrollTable/inputTable";
import httpService from "./services/httpService";

function App() {
  httpService.setJwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGQ5MmE5NDhiZjM3MTM3Y2NhOWVmNmMiLCJpYXQiOjE1NzQ1ODU3NjJ9.CnbFwCWSKQFKD0bObfoWT5AoDl7oKeV-7xW7RrcvJ2g"
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

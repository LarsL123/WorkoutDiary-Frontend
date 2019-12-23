import React from "react";
import InputTable from "./inputTable/inputTable.jsx";
import httpService from "./common/services/httpService";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./common/users/forms/loginForm";
import RegisterForm from "./common/users/forms/registerForm";
import Logout from "./common/users/forms/logout";

import "./App.css";

function App() {
  httpService.setJwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGQ5MmE5NDhiZjM3MTM3Y2NhOWVmNmMiLCJpYXQiOjE1NzQ1ODU3NjJ9.CnbFwCWSKQFKD0bObfoWT5AoDl7oKeV-7xW7RrcvJ2g"
  ); //Hardcoded token. Remove as fast as possivble. TODO: Add user login
  console.log(window.BACKEND_URI);

  //TODO copy structure from Vidly
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={RegisterForm} />
        <div>
          <InputTable></InputTable>
        </div>
      </Switch>
    </div>
  );
}

export default App;

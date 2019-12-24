import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import auth from "./common/services/authService";
import InputTable from "./inputTable/inputTable.jsx";
import Summary from "./summary/summary";
import NavBar from "./common/nav/navBar/navBar";
import NotFound from "./common/nav/notFound/notFound";
import LoginForm from "./common/users/forms/loginForm";
import RegisterForm from "./common/users/forms/registerForm";
import Logout from "./common/users/forms/logout";
import "./App.css";
//TODO copy structure from Vidly
function App() {
  console.log(window.BACKEND_URI);
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  return (
    <div className="App">
      <NavBar user={user} />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/summary" component={Summary} />
        <Route
          path="/input"
          render={props => <InputTable {...props} user={user} />}
        />
        <Route path="/not-found" component={NotFound} />
        <Redirect exact from="/" to="/input" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;

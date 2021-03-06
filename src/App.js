import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import InputTable from "./inputTable/inputTable.jsx";
import Summary from "./summary/summary";
import NavBar from "./common/nav/navBar/navBar";
import NotFound from "./common/nav/notFound/notFound";
import LoginForm from "./common/users/forms/loginForm";
import RegisterForm from "./common/users/forms/registerForm";
import Logout from "./common/users/forms/logout";
import Profile from "./profile/profile";
import auth from "./common/services/authService";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, []);

  return (
    <Router>
      <NavBar user={user} />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/profile" component={Profile} />
          <Route path="/summary" component={Summary} />
          <Route
            path="/input"
            render={(props) => <InputTable {...props} user={user} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/input" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

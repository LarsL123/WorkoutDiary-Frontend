import auth from "../../services/authService";

//TODO: Don't keep in forms folder

const Logout = () => {
  auth.logout();
  window.location = "/";

  return null;
};

export default Logout;

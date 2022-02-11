import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import LoginForm from "../LoginForm";
import Dashboard from "./Dashboard";
const Home = () => {
  const { isAuthenticated } = useContext(AppContext);
  console.log('isAuth', isAuthenticated)

  return <>{isAuthenticated ? <Dashboard /> : <LoginForm />}</>;
};
export default Home;

import Home from "./Home";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Creer from "./pages/Creer";

const App = () => {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Creer", element: <Creer /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

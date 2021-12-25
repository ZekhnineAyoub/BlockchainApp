import Home from "./Home";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Creer from "./pages/Creer";
import List from "./components/List";

const App = () => {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Creer", element: <Creer /> },
    { path: "/List",element:<List/>},
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

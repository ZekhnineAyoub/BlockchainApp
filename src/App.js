import Home from "./Home";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Creer from "./pages/Creer";
import List from "./components/List";
import MoveInformation from "./components/MoveInformation";

const App = () => {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Creer", element: <Creer /> },
    { path: "/List",element:<List/>},
    { path: "/CardDetails",element:<MoveInformation/>},
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

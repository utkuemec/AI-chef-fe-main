import About from "../pages/About";
import Home from "../pages/Home";
import Recommendation from "../pages/Recommendation";
import PathConstants from "./pathConstants";

// const Home = React.lazy(() => import("../pages/Home"));
// const Recommendation = React.lazy(() => import("../pages/Recommendation"));
// const About = React.lazy(() => import("../pages/About"));

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.RECOMMENDATION, element: <Recommendation /> },
  { path: PathConstants.ABOUT, element: <About /> },
];
export default routes;

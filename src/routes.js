import { Navigate, createBrowserRouter } from "react-router-dom";
import HomeRoute from "./pages/Home/Routes";
import ProfileRoute from "./pages/Profile/Routes";
import PageNotFound from "./common/PageNotFound/PageNotFound";

export default createBrowserRouter([
  HomeRoute,
  ProfileRoute,
  {
    path: "/404",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
]);

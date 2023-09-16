import { Navigate, RouteObject } from "react-router-dom";
import LandingLayout from "./layouts/Landing";
import { Home } from "./views/Home/home.view";

export const WebRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
];

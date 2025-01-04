import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";

const RootLayout = lazy(() => import("../layouts/RootLayout"));
const Signup = lazy(() => import("../pages/Signup"));
const Login = lazy(() => import("../pages/Login"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Home = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/signup",
    element: (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Signup />
      </ErrorBoundary>
    ),
  },
  {
    path: "/login",
    element: (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Login />
      </ErrorBoundary>
    ),
  },
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <RootLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/faq",
      //   element: <Faq />,
      // },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

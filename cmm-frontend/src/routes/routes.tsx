import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";

const Signup = lazy(() => import("../pages/Signup"));
const NotFound = lazy(() => import("../pages/NotFound"));
const RootLayout = lazy(() => import("../layouts/RootLayout"));

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
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <RootLayout />
      </ErrorBoundary>
    ),
    // children: [
    //   {
    //     index: true,
    //     element: <Navigate to="/faq" />,
    //   },
    //   {
    //     path: "/faq",
    //     element: <Faq />,
    //   },
    // ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

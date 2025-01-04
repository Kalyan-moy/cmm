import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import LoadingPage from "../pages/LoadingPage";
import { router } from "./routes";

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoutes;

import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./pages/Home";
import ProjectDetails from "./layouts/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // wrap the in layout
    children: [
      { index: true, element: <Home /> },

      { path: "/project/:projectId", element: <ProjectDetails /> },
    ],
  },
]);

export default router;

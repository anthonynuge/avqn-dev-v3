import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // wrap the in layout
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;

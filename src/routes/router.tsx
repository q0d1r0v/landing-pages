import { createBrowserRouter } from "react-router";

// pages
import { IndexPage } from "@/pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

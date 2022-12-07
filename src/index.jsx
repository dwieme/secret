import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Riddle from "./pages/Riddle";
import Crossword from "./pages/Crossword";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Riddle />,
        },
        {
          path: "crossword",
          element: <Crossword />,
        },
      ],
    },
  ],
  { basename: "/secret" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/Homepage";
import Profile from "./Components/Profile";
import RepoDetail from "./Components/ReposDetails";
import Following from "./Components/Following";
import Followers from "./Components/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "profile/:id",
    element: <Profile />,
  },
  {
    path: "/reposDetail/:id/:Detail",
    element: <RepoDetail />,
  },
  {
    path: "/following/:id",
    element: <Following />,
  },
  {
    path: "/followers/:id",
    element: <Followers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import ErrorPage from "./component/ErrorPage/ErrorPage.jsx";

const restaurant = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={restaurant}></RouterProvider>
   </React.StrictMode>
);

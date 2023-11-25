import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import ErrorPage from "./component/ErrorPage/ErrorPage.jsx";
import Restaurant from "./component/Restaurant/Restaurant.jsx";
import Meal from "./component/Meal/Meal.jsx";
import Fish from "./component/Fish/Fish.jsx";
import Chicken from "./component/Chicken/Chicken.jsx";
import Beef from "./component/Beef/Beef.jsx";

const restaurant = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Restaurant></Restaurant>,
            loader: () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"),
         },
         {
            path: "/meal",
            element: <Meal></Meal>,
         },
         {
            path: "/fish",
            element: <Fish></Fish>,
         },
         {
            path: "/chicken",
            element: <Chicken />,
         },
         {
            path: "/beef",
            element: <Beef></Beef>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={restaurant}></RouterProvider>
   </React.StrictMode>
);

import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Restaurant = () => {
   const meals = useLoaderData();
   return (
      <>
         <h2>Restaurant: {meals.length}</h2>
      </>
   );
};

export default Restaurant;

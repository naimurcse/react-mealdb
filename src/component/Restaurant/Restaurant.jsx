import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Restaurant = () => {
   const meals = useLoaderData();
   console.log(meals.meals[0]);
   const { strMeal, strMealThumb, strInstructions, strArea, strCategory, stryoutube } =
      meals.meals[0];

   const background = {
      minHeight: "70vh",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${strMealThumb})`,
      backgroundSize: "cover",
   };
   return (
      <div
         style={background}
         className="special-meal flex flex-col justify-center md:px-20 px-10 text-white"
      >
         <p className="text-yellow-300 text-2xl font-light">Our Special</p>
         <h3 className="text-4xl md:text-5xl font-bold mb-4">{strMeal}</h3>
         <div>
            {/* <p className="font-light md:text-xl">{strInstructions}</p> */}
            <p className="font-light md:text-xl">
               {strInstructions.length > 300
                  ? strInstructions.substring(0, 300) + "...."
                  : strInstructions}
            </p>
            <span>See More</span>
         </div>
      </div>
   );
};

export default Restaurant;

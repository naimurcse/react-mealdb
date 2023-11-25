import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Restaurant = () => {
   const meals = useLoaderData();
   console.log(meals.meals[0]);
   const { strMeal, strMealThumb, strInstructions, strArea, strCategory, stryoutube } =
      meals.meals[0];

   const background = {
      minHeight: "70vh",
      backgroundImage: `url(${strMealThumb})`,
      backgroundSize: "cover",
   };
   return (
      <div style={background} className="special-meal flex flex-col justify-center px-20">
         <h3 className="text-3xl font-bold mb-4">Our Special: {strMeal}</h3>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolore veniam iste
            doloribus tenetur non exercitationem. Nesciunt dolore veritatis vero officiis voluptatem
            debitis non, velit corrupti totam aut placeat vel dignissimos in recusandae blanditiis
            quibusdam necessitatibus voluptates dolorum distinctio molestiae libero beatae iste ut
            sequi? Odit quam voluptatem fugiat velit.
         </p>
      </div>
   );
};

export default Restaurant;

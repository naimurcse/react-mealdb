import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();
   console.log(error);
   console.log(error.status);
   console.log(error.statusText);
   console.log(error);

   return (
      <div className="flex justify-center items-center border-2 border-red-300 h-screen">
         <div className="w-100 text-center border p-8">
            <h3 className="text-3xl font-light">ERROR</h3>
            <h2 className="text-6xl font-bold">{error.status}</h2>
            <p className="text-xl text-red-600 font-semibold">{error.statusText}</p>
         </div>
      </div>
   );
};

export default ErrorPage;

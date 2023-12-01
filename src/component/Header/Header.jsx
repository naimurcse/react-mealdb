import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
   const [open, setOpen] = useState(false);
   console.log("Open", open);
   return (
      <div className="flex md:flex-col absolute md:static w-full justify-between items-center">
         <div className="logo md:text-center">
            <h2 className="md:text-4xl font-bold md:font-thin py-3 pl-8 md:pl-0">WASFIA KITCHEN</h2>
         </div>

         <div className="mr-6" onClick={() => setOpen(!open)}>
            <span>
               {open ? (
                  <XMarkIcon className="h-6 w-6 text-blue-500 md:hidden" />
               ) : (
                  <Bars3Icon className="h-6 w-6 text-blue-500 md:hidden" />
               )}
            </span>
         </div>

         <nav
            className={`flex md:flex-row md:justify-center flex-col absolute md:static end-0 duration-500 bg-orange-100 md:bg-transparent ${
               open ? "top-12" : "-top-60"
            }`}
         >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/meal">Meal</ActiveLink>
            <ActiveLink to="/fish">Fish</ActiveLink>
            <ActiveLink to="/chicken">Chicken</ActiveLink>
            <ActiveLink to="/beef">Beef</ActiveLink>
         </nav>
      </div>
   );
};

export default Header;

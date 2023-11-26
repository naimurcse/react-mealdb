import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
   return (
      <div className="flex md:flex-col absolute md:static w-full justify-between">
         <div className="logo md:text-center">
            <h2 className="md:text-4xl font-bold md:font-thin py-3 pl-8 md:pl-0">WASFIA KITCHEN</h2>
         </div>
         <nav className="flex md:flex-row md:justify-center flex-col">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/meal">Meal</ActiveLink>
            <ActiveLink to="/Fish">Fish</ActiveLink>
            <ActiveLink to="/Chicken">Chicken</ActiveLink>
            <ActiveLink to="/Beef">Beef</ActiveLink>
         </nav>
      </div>
   );
};

export default Header;

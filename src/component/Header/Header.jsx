import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
   return (
      <div className="bg-white text-center">
         <div className="logo">
            <h2 className="text-4xl font-thin py-3">WASFIA KITCHEN</h2>
         </div>
         <nav className="">
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

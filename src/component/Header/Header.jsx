import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
   return (
      <nav>
         <ActiveLink to="/">Home</ActiveLink>
         <ActiveLink to="/meal">Meal</ActiveLink>
         <ActiveLink to="/Fish">Fish</ActiveLink>
         <ActiveLink to="/Chicken">Chicken</ActiveLink>
         <ActiveLink to="/Beef">Beef</ActiveLink>
      </nav>
   );
};

export default Header;

import { NavLink } from "react-router-dom";
import "./ActiveLink.css";
import PropTypes from "prop-types";

const ActiveLink = ({ to, children }) => {
   return (
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
         {children}
      </NavLink>
   );
};

ActiveLink.propTypes = {
   to: PropTypes.any, // Adjust the type according to your requirements
   children: PropTypes.any, // Define other props as needed
};

export default ActiveLink;

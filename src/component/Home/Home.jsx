import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Discount from "../Discount/Discount";

const Home = () => {
   return (
      <div>
         <Discount></Discount>
         <Header></Header>
         <main className="bg-slate-100">
            <Outlet></Outlet>
         </main>
      </div>
   );
};

export default Home;

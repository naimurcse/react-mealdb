import { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
   const [prices, setPrices] = useState([]);
   useEffect(() => {
      fetch("prices.json")
         .then((res) => res.json())
         .then((data) => setPrices(data));
   }, []);
   return (
      <div className="px-20 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         {prices.map((price) => (
            <PriceCard key={price.id} price={price}></PriceCard>
         ))}
      </div>
   );
};

export default PriceList;

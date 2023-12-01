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
      <div>
         {prices.map((price) => (
            <PriceCard key={price.id} price={price}></PriceCard>
         ))}
         <h1>PriceList</h1>
      </div>
   );
};

export default PriceList;

import PropTypes from "prop-types";
const PriceCard = ({ price }) => {
   const { id, label, subscriptionFee, features } = price;
   console.log(price);
   return (
      <div className="bg-slate-100 p-8 ">
         <h2 className="text-5xl text-bold">
            {subscriptionFee} <span className="text-semibold text-lg">/ month</span>{" "}
         </h2>
         <h1>{id}</h1>
         <h2>{label}</h2>
         <ul>
            <h2 className="text-xl text-bold">Features: </h2>
            {features.map((feature) => (
               <li className="ml-4" key={id}>
                  {" "}
                  {feature}{" "}
               </li>
            ))}
         </ul>
      </div>
   );
};

PriceCard.propTypes = {
   id: PropTypes.number.isRequired,
   label: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PriceCard;

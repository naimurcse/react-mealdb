import PropTypes from "prop-types";
const PriceCard = ({ price }) => {
   const { id, label, features } = price;
   console.log(price);
   return (
      <div>
         <h1>{id}</h1>
         <h2>{label}</h2>
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

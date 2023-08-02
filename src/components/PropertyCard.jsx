import houseImage from "/house-image.jpg";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div>
      <Link to={`/houses/${property.id}`}>
        <img src={houseImage} className="logo" />
      </Link>
      <p>
        {property.house_type} at KES {property.rent} in {property.location},{" "}
        {property.city}
      </p>
      <Link to={`/houses/${property.id}`}>View house</Link>
    </div>
  );
}

export default PropertyCard;

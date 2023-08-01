import houseImage from "/house-image.jpg";
import { Link, useHistory } from "react-router-dom";

function PropertyCard({ house }) {
  const history = useHistory();
  return (
    <>
      <img
        src={houseImage}
        className="logo"
        onClick={() => {
          history.push(`/houses/${house.id}`);
        }}
      />
      <p>
        {house.house_type} at KES {house.rent} in {house.location}, {house.city}
      </p>
      <Link to={`/houses/${house.id}`}>View house</Link>
    </>
  );
}

export default PropertyCard;

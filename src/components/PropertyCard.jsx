import houseImage from "/house-image.jpg";

function PropertyCard() {
  const house = {
    house_type: "One Bedroom",
    rent: 10000,
    city: "Nairobi",
    location: "Buruburu",
  };
  return (
    <>
      <img src={houseImage} className="logo" />
      <p>
        {house.house_type} at KES {house.rent} in {house.location}, {house.city}
      </p>
    </>
  );
}

export default PropertyCard;

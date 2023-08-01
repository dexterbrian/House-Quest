import PropertyCard from "./PropertyCard";
import NavBar from "./NavBar";

function PropertiesList() {
  const house = {
    id: 1,
    house_type: "One Bedroom",
    rent: 10000,
    city: "Nairobi",
    location: "Buruburu",
  };
  return (
    <>
      <NavBar />
      <PropertyCard house={house} />
      <p>Oh no😢! It seems there are no properties available at the moment.</p>
    </>
  );
}

export default PropertiesList;

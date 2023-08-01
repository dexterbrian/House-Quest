import PropertyCard from "./PropertyCard";
import NavBar from "./NavBar";

function PropertiesList({ house }) {
  return (
    <>
      <NavBar />
      <PropertyCard house={house} />
      <p>Oh no😢! It seems there are no properties available at the moment.</p>
    </>
  );
}

export default PropertiesList;

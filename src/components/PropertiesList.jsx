import PropertyCard from "./PropertyCard";
import NavBar from "./NavBar";

function PropertiesList({ properties }) {
  return (
    <>
      <NavBar />
      {properties.length === 0 ? (
        <p>
          Oh no😢! It seems there are no properties available at the moment.
        </p>
      ) : (
        properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      )}
    </>
  );
}

export default PropertiesList;

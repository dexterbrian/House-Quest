import houseImage from "/house-image.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../global_vars";

function PropertyDetails() {
  const [property, setProperty] = useState(null);
  const { propertyId } = useParams();

  // const house = {
  //   id: 1,
  //   house_type: "One Bedroom",
  //   rent: 10000,
  //   city: "Nairobi",
  //   location: "Buruburu",
  //   building: "Dexter's Lab",
  //   coordinates: "https://appify.co.ke",
  //   owner: {
  //     name: "Dexter",
  //     phone: "254711223344",
  //   },
  // };

  useEffect(() => {
    async function fetchData() {
      await fetch(`${baseUrl}/properties/${propertyId}`)
        .then((response) => response.json())
        .then((data) => setProperty(data))
        .catch((error) =>
          console.error("Error fetching house details:", error)
        );
    }
    fetchData();
  }, []);

  console.log("Single property:");
  console.log(property);

  return (
    <div>
      {!property ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>
            {property?.house_type} at KES {property?.rent} in{" "}
            {property?.location}, {property?.city}
          </h2>
          <img
            src={houseImage}
            height="300"
            onClick={() => {
              history.push(`/houses/${property?.id}`);
            }}
          />
          <p>
            This {property?.house_type} house is located at {property?.building}{" "}
            in {property?.location}, {property?.city}. To schedule a physical
            visit, please contact {property?.owner.name} at{" "}
            {property?.owner.phone}.
          </p>
          <a href={property?.coordinates}>View the location on Google Maps</a>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;

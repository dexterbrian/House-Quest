import houseImage from "/house-image.jpg";

function DetailView({ house }) {
  return (
    <>
      <h2>
        {house.house_type} at KES {house.rent} in {house.location}, {house.city}
      </h2>
      <img
        src={houseImage}
        height="300"
        onClick={() => {
          history.push(`/houses/${house.id}`);
        }}
      />
      <p>
        This {house.house_type} house is located at {house.building} in{" "}
        {house.location}, {house.city}. To schedule a physical visit, please
        contact {house.owner} at {house.phone}.
      </p>
      <a href={house.coordinates}>View the location on Google Maps</a>
    </>
  );
}

export default DetailView;

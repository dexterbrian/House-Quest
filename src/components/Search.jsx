import { useState } from "react";
import { useHistory } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const history = useHistory();

  return (
    <>
      <input
        type="text"
        placeholder="Type a location or leave blank..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault;
          history.push("/houses", query);
        }}
      >
        Find a house
      </button>
    </>
  );
}

export default Search;

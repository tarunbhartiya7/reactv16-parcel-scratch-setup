import React from "react";
import { Link } from "@reach/router";

// function or stateless component
const Pet = ({ imageUrl, animal, breed, id }) => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed)
  // ]);
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={imageUrl} alt="dog" />
      </div>
      <div className="info">
        <h2>
          {animal} - {breed}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;

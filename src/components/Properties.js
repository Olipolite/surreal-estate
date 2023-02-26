import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";

const Properties = () => {
  const initialState = {
    properties: [],
  };

  const [properties, setProperties] = useState(initialState.properties);

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/PropertyListing", bajs);
  }, []);

  return (
    <div className="properties">
      <h2 className="properties-heading">Properties</h2>
      <div>
        <PropertyCard
          title={PropertyCard.title}
          type={PropertyCard.type}
          bathrooms={PropertyCard.bathrooms}
          bedrooms={PropertyCard.bedrooms}
          price={PropertyCard.price}
          city={PropertyCard.city}
          email={PropertyCard.email}
        />
      </div>
    </div>
  );
};

export default Properties;

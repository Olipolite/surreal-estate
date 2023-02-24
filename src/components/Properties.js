import React from "react";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";

const Properties = () => {
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

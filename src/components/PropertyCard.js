import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBathtub } from "@fortawesome/free-solid-svg-icons";
import Proptypes from "prop-types";
import "../styles/propertycard.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="title">{title}</div>
      <div className="type">{type}</div>
      <div className="bathrooms">
        <FontAwesomeIcon icon={faBathtub} />
        {bathrooms}
      </div>
      <div className="bedrooms">
        <FontAwesomeIcon icon={faBed} />
        {bedrooms}
      </div>
      <div className="price">{price}</div>
      <div className="city">{city}</div>
      <div className="email">{email}</div>
      <div>{email}</div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: Proptypes.string,
  type: Proptypes.string,
  bathrooms: Proptypes,
  bedrooms: Proptypes,
  price: Proptypes,
  city: Proptypes,
  email: Proptypes,
}.isRequired;

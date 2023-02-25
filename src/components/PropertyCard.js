import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBathtub,
  faSterlingSign,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
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
    <div>
      <div className="icon-card">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="allt">
        <div className="title">{title}4 bedroom terrace</div>
        <div className="type">{type}terrace house</div>
        <div className="bathrooms">
          <FontAwesomeIcon icon={faBathtub} />
          {bathrooms}
        </div>
        <div className="bedrooms">
          <FontAwesomeIcon icon={faBed} />
          {bedrooms}
        </div>
        <div className="price">
          <FontAwesomeIcon icon={faSterlingSign} />
          {price}
        </div>
        <div className="city">{city}</div>
        <div className="email">
          <button className="email-button" type="submit" onClick={email}>
            email
          </button>
        </div>
      </div>
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

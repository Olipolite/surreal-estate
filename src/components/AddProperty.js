import React, { useState } from "react";
import "../styles/addproperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <button type="submit">Submit</button>
      </form>
      <h2 className="add-property-heading">Add Property</h2>
    </div>
  );
};

export default AddProperty;

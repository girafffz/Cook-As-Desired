import React from "react";

const Ingredients = (props) => {
  const ingredientsList = props.ingredientsList;

  return <div>ingredients: {ingredientsList}</div>;
};

export default Ingredients;

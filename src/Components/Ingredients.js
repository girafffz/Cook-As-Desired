import React from "react";

const Ingredients = (props) => {
  const ingredientsList = props.ingredientsList;

  console.log(ingredientsList);

  return <div>ingredients: {JSON.stringify(ingredientsList)}</div>;
};

export default Ingredients;

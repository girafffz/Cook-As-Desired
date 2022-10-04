import React from "react";

// Ingredients shows individual ingredient of the selected recipe

const Ingredients = (props) => {
  // getting the data containing ingredients of the selected recipe
  const componentsArr = props.ingredientsList;

  const ingredientArr = [];
  // looping and pushing each ingredient into an array
  const getEachIngredient = () => {
    if (Array.isArray(componentsArr)) {
      for (const item of componentsArr[0].components) {
        ingredientArr.push(<li key={item.id}>{item.raw_text}</li>);
      }
    }
    return ingredientArr;
  };

  getEachIngredient();

  return (
    <div>
      <h3>Ingredients</h3>
      <ol>{ingredientArr}</ol>
    </div>
  );
};

export default Ingredients;

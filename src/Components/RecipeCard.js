import React from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

// component that renders the recipe basic information after search

const RecipeCard = (props) => {
  const ingredientsList = props.ingredients;
  const instructionsList = props.instructions;

  return (
    <div className="recipeContainer" id={props.id}>
      <img src={props.src} alt={props.alt} />
      <h3>{props.alt}</h3>
      <p>description: {props.description}</p>
      <p>yield: {props.servingSize} servings</p>
      <p>prep time: {props.prepTime}</p>
      <p>cook time: {props.cookTime} mins</p>
      <Ingredients ingredientsList={ingredientsList} />
      <Instructions instructionsList={instructionsList} />
      <button>View More</button>
    </div>
  );
};

export default RecipeCard;

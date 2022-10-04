import React from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

// RecipeDetails shows the details of the selected recipe

const RecipeDetails = (props) => {
  // getting the data of the selected recipe
  const recipeSelected = props.recipe;

  return (
    <div id={recipeSelected.id}>
      <img src={recipeSelected.thumbnail_url} alt={recipeSelected.name}></img>
      <h2>{recipeSelected.name}</h2>
      <p>{`Yields: ${recipeSelected.num_servings} servings`}</p>
      <p>{`Prep time: ${recipeSelected.prep_time_minutes} mins`}</p>
      <p>{`Cook time: ${recipeSelected.cook_time_minutes} mins`}</p>
      <p>{recipeSelected.description}</p>
      <Ingredients ingredientsList={recipeSelected.sections[0]} />
      <Instructions instructionsList={recipeSelected.instructions} />
      <button type="button" onClick={props.onClick}>
        Hide
      </button>
    </div>
  );
};

export default RecipeDetails;

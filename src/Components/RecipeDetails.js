import React from "react";

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

// RecipeDetails shows the details of the selected recipe

const RecipeDetails = (props) => {
  // getting the data of the selected recipe
  const recipeSelected = props.recipe;

  return (
    <div className="container">
      <div id={recipeSelected.id}>
        <img
          className="detail-img"
          src={recipeSelected.thumbnail_url}
          alt={recipeSelected.name}
        ></img>
        <h2 className="mb-4">{recipeSelected.name}</h2>
        <p>{`Servings: ${recipeSelected.num_servings}`}</p>
        <p>{`Prep: ${recipeSelected.prep_time_minutes} mins`}</p>
        <p>{`Cook: ${recipeSelected.cook_time_minutes} mins`}</p>
        <h3 className="mb-4 mt-4">Description</h3>
        <p>{recipeSelected.description}</p>
        <Ingredients ingredientsList={recipeSelected.sections} />
        <Instructions instructionsList={recipeSelected.instructions} />
        <button className="btn mt-5" type="button" onClick={props.onClick}>
          Back
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;

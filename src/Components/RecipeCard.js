import React from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import { Link } from "react-router-dom";

// component that renders the recipe basic information after search

const RecipeCard = (props) => {
  const ingredientsList = props.ingredients;
  const instructionsList = props.instructions;

  // console.table(instructionsList);

  // return <></>;

  return (
    <div className="recipeContainer" id={props.id}>
      <img src={props.src} alt={props.alt} />
      <h3>
        {props.recipeName.lenght < 20
          ? `${props.recipeName}`
          : `${props.recipeName.substring(0, 25)}...`}
      </h3>
      <p>description: {props.description}</p>
      <p>yield: {props.servingSize} servings</p>
      <p>prep time: {props.prepTime}</p>
      <p>cook time: {props.cookTime} mins</p>
      <Ingredients ingredientsList={ingredientsList} />
      <Instructions instructionsList={instructionsList} />
      <button>
        <Link to={`/recipeDetails/${props.id}/${props.recipeName}`}>
          View More
        </Link>
      </button>
    </div>
  );
};

export default RecipeCard;

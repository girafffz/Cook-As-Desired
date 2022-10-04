import React from "react";

// RecipeCard renders basic information of each recipe relevant to search

const RecipeCard = (props) => {
  return (
    <div className="recipeContainer" id={props.id}>
      <img src={props.src} alt={props.alt} />
      <h3>
        {props.recipeName.length < 20
          ? `${props.recipeName}`
          : `${props.recipeName.substring(0, 25)}...`}
      </h3>
      <p>{`Yields: ${props.servingSize} servings`}</p>
      <p>{`Prep time: ${props.prepTime} mins`}</p>
      <p>{`Cook time: ${props.cookTime} mins`}</p>
      <div>
        <button type="button" onClick={props.onClick}>
          View More
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

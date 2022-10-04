import React, { useState } from "react";

import RecipeDetails from "./RecipeDetails";
import RecipeCard from "./RecipeCard";

// RecipesList contains all the recipe cards relevant to the search
// use states to toggle between RecipeCard and RecipeDetails

const RecipesList = (props) => {
  // states
  const [recipeIsSelected, setRecipeIsSelected] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  const handleRecipeSelection = (recipe) => {
    setRecipeIsSelected(recipe);
    setShowDetails(true);
  };

  const recipesResultsArr = props.recipesResults.map((recipe, i) => {
    return (
      <div key={i}>
        <RecipeCard
          src={recipe.thumbnail_url}
          alt={recipe.name}
          recipeName={recipe.name}
          id={recipe.id}
          servingSize={recipe.num_servings}
          prepTime={recipe.prep_time_minutes}
          cookTime={recipe.cook_time_minutes}
          onClick={() => {
            handleRecipeSelection(recipe);
          }}
        />
      </div>
    );
  });

  return (
    <div>
      {showDetails ? (
        <RecipeDetails
          recipe={recipeIsSelected}
          onClick={() => {
            setShowDetails(false);
          }}
        />
      ) : (
        <>
          <h2>List of Recipes</h2>
          {recipesResultsArr}
        </>
      )}
    </div>
  );
};

export default RecipesList;

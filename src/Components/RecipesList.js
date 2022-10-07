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
      <>
        <RecipeCard
          key={i}
          src={recipe.thumbnail_url}
          alt={recipe.name}
          recipeName={recipe.name}
          id={recipe.id}
          // servingSize={recipe.num_servings}
          // prepTime={recipe.prep_time_minutes}
          // cookTime={recipe.cook_time_minutes}
          onClick={() => {
            handleRecipeSelection(recipe);
          }}
        />
      </>
    );
  });

  return (
    <>
      {showDetails ? (
        <RecipeDetails
          recipe={recipeIsSelected}
          onClick={() => {
            setShowDetails(false);
          }}
        />
      ) : (
        <div>
          <div className="col container">
            <h2 className="mt-5">List of Recipes</h2>
            <div className="row row-cols-lg-4 g-lg-5 my-2">
              {recipesResultsArr}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipesList;

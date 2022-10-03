import React from "react";
import RecipeCard from "./RecipeCard";

// component that contains all the recipe cards relevant to the search

const RecipesList = (props) => {
  const recipesResults = props.recipesResults.map((recipe) => {
    return (
      <>
        <RecipeCard
          src={recipe.thumbnail_url}
          alt={recipe.name}
          id={recipe.id}
          description={recipe.description}
          servingSize={recipe.num_servings}
          prepTime={recipe.prep_time_minutes}
          cookTime={recipe.cook_time_minutes}
          ingredients={"happy"}
          instructions={"cooking directions"}
        />
      </>
    );
  });

  return (
    <div>
      List of Recipes
      {recipesResults}
    </div>
  );
};

export default RecipesList;

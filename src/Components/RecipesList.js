import React from "react";
import RecipeCard from "./RecipeCard";

// component that contains all the recipe cards relevant to the search

const RecipesList = (props) => {
  // const instructionArray = [];
  // const instructionObj = {};

  const recipesResults = props.recipesResults.map((recipe, i) => {
    // console.log(recipe.instructions);
    // console.log(recipe.sections);
    // setInstructions(recipe.instructions.display_text);
    return (
      <>
        <RecipeCard
          key={i}
          src={recipe.thumbnail_url}
          alt={recipe.name}
          id={recipe.id}
          description={recipe.description}
          servingSize={recipe.num_servings}
          prepTime={recipe.prep_time_minutes}
          cookTime={recipe.cook_time_minutes}
          ingredients={recipe.sections}
          instructions={recipe.instructions}
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

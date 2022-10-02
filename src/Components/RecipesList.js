import React from "react";
import RecipeCard from "./RecipeCard";

// component that contains all the recipe cards relevant to the search

const RecipesList = () => {
  return (
    <div>
      List of Recipes
      <RecipeCard />
    </div>
  );
};

export default RecipesList;

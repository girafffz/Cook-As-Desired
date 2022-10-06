import React from "react";

import RecipesList from "../Components/RecipesList";

const Favourites = (props) => {
  return (
    <div>
      {props.searchHasStart ? (
        <RecipesList recipesResults={props.recipesResults} />
      ) : (
        <>
          <div className="col container">
            <h2>Favourite Recipes</h2>
            <div className="row row-cols-lg-4 g-lg-5 my-5"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Favourites;

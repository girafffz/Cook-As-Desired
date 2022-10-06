import React from "react";

import RecipesList from "../Components/RecipesList";
import webBanner from "../images/cook-as-desired-banner.png";

const Home = (props) => {
  return (
    <div>
      {props.searchHasStart ? (
        <RecipesList recipesResults={props.recipesResults} />
      ) : (
        <img className="home-web-banner" src={webBanner} alt="web banner" />
      )}
    </div>
  );
};

export default Home;

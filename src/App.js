import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./Components/NavBar";
import initialData from "./initialData";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";

// api will be called here
// search for recipes will be conducted here
// state (search results) will be passed to receipeslist to map into individual recipe cards

function App() {
  const [recipesResults, setRecipesResults] = useState([]);
  const [searchHasStart, setSearchHasStart] = useState(false);

  // const getRecipes = async (e) => {
  //   e.preventDefault();
  //   const searchInput = e.target.elements.searchInput.value;
  //   console.log(searchInput);

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": ${process.env.REACT_APP_VERY_PRIVATE_KEY},
  //       "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  //     },
  //   };
  //   // note: tags are optional, if required, get suitable values from tags/list API from RapidAPI Tasty
  //   // if no tags, remove "&tags="
  //   // search values: &q=
  //   const Api_url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${searchInput}`;
  //   const response = await fetch(Api_url, options);
  //   const data = await response.json();
  //   console.log(data);
  //   setRecipesResults(data.results);
  // };

  const getRecipes = (e) => {
    e.preventDefault();
    const searchInput = e.target.elements.searchInput.value;
    console.log(searchInput);

    setRecipesResults(initialData);
    setSearchHasStart(true);
  };

  return (
    <div>
      <NavBar
        getRecipes={getRecipes}
        searchHasStart={searchHasStart}
        setSearchHasStart={setSearchHasStart}
      />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/home"
          element={
            <Home
              recipesResults={recipesResults}
              searchHasStart={searchHasStart}
              setSearchHasStart={setSearchHasStart}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              recipesResults={recipesResults}
              searchHasStart={searchHasStart}
              setSearchHasStart={setSearchHasStart}
            />
          }
        />
      </Routes>
      <br />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Components/Header";
import RecipesList from "./Components/RecipesList";
import Search from "./Components/Search";

// here is where is state will be managed
// api will be called here
// search for recipes will be conducted here
// state (search results) will be passed to receipeslist to map into individual recipe cards

function App() {
  return (
    <div>
      <Header />
      <Search />
      <RecipesList />
    </div>
  );
}

export default App;

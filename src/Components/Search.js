import React from "react";

// creates input form for search purposes
// the name attribute will be used to access the value of the input

const Search = (props) => {
  return (
    <form onSubmit={props.getRecipes}>
      <input type="text" name="searchInput" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

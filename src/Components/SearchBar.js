import React from "react";

// creates input form for search purposes
// the name attribute will be used to access the value of the input

const SearchBar = (props) => {
  console.log(props);

  return (
    <form onSubmit={props.getRecipes}>
      <input type="text" name="searchInput" placeholder="search recipe here" />
      <button type="submit" onClick={props.onClick}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;

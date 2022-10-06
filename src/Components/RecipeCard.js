import React from "react";

// RecipeCard renders basic information of each recipe relevant to search

const RecipeCard = (props) => {
  // console.log(props);

  return (
    // <div className="row">
    <div className="recipe-container">
      <div className="card" id={props.id}>
        <img
          className="card-img-top card-img"
          src={props.src}
          alt={props.alt}
        />
        <div className="card-body">
          {/* Card Content */}
          <h5 className="card-title mb-3">
            {props.recipeName.length < 20
              ? `${props.recipeName}`
              : `${props.recipeName.substring(0, 21)}...`}
          </h5>
          <div className="card-text mb-1">{`Servings: ${props.servingSize}`}</div>
          <div className="card-text mb-1">{`Prep: ${props.prepTime} mins`}</div>
          <div className="card-text mb-1">{`Cook: ${props.cookTime} mins`}</div>
          <div>
            <button type="button" className="btn mt-3" onClick={props.onClick}>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default RecipeCard;

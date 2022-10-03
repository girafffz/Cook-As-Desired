import React from "react";

// returns ordered list of instructions to be shown in recipe details

const Instructions = (props) => {
  const instructionsArr = props.instructions;

  const stepsArr = [];

  const getEachSteps = () => {
    for (const step in instructionsArr) {
      stepsArr.push(<li>{instructionsArr[step].display_text}</li>);
    }
    return stepsArr;
  };

  getEachSteps();

  return (
    <div>
      <h3>Instructions</h3>
      <ol>{stepsArr}</ol>
    </div>
  );
};

export default Instructions;

import React from "react";

// returns ordered list of instructions to be shown in recipe details

const Instructions = (props) => {
  // getting data containing instructions of the selected recipe
  const instructionsArr = props.instructionsList;

  const stepsArr = [];
  // mapping each steps of the cooking instruction into an array
  const getEachSteps = () => {
    for (const step in instructionsArr) {
      stepsArr.push(
        <li key={instructionsArr[step].id}>
          {instructionsArr[step].display_text}
        </li>
      );
    }
    return stepsArr;
  };

  getEachSteps();

  return (
    <div>
      <h3 className="mb-4 mt-4">Instructions</h3>
      <ol>{stepsArr}</ol>
    </div>
  );
};

export default Instructions;

import React from "react";

const Instructions = (props) => {
  const instructionsList = props.instructionsList;

  console.log(instructionsList);

  return <div>instructions: {instructionsList}</div>;
};

export default Instructions;

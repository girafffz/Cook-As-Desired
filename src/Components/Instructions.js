import React from "react";

const Instructions = (props) => {
  const instructionsList = props.instructionsList;

  console.log(instructionsList);

  return <>instructions: {JSON.stringify(instructionsList)}</>;
};

export default Instructions;

module.exports = (assumptions, positionToCheck) => {
  const assumptionsArr = assumptions.map((assumption) => assumption + ".\n");

  let assumptionString = "";

  assumptionsArr.forEach((assumption) => {
    assumptionString += assumption;
  });

  return `formulas(assumptions).

${assumptionString}

end_of_list.

formulas(goals).

-mine(${positionToCheck.x},${positionToCheck.y}).

end_of_list.
`;
};

//
//-mine(1,1).

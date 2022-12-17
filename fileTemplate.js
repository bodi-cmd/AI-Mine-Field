module.exports = (assumptions, positionToCheck) => {
  return `formulas(assumptions).

${assumptions.map((assumption) => assumption + ".\n")}

end_of_list.

formulas(goals).

-mine(${positionToCheck.x},${positionToCheck.y}).

end_of_list.
`;
};

//
//-mine(1,1).
module.exports = (assumptions, positionToCheck) => {
  return `formulas(assumptions).

${assumptions.map((assumption) => assumption + ".\n")}

end_of_list.

formulas(goals).

-mine(${positionToCheck.x},${positionToCheck.y}).

end_of_list.
`;
};

//all x -mine(x,x).
//-mine(1,1).
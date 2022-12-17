window.addEventListener("load", (event) => {
  const MATRIX_SIZE = 8;
  const socket = io();
  socket.on("connect", function () {
    console.log("socket connected");
  });

  onkeydown = (event) => {
    socket.emit("KEY_EVENT", event.key);
  };

  socket.on("UPDATE", function (gameState) {
    update(gameState);
  });
});

const update = (gameState) => {
  const checkIfSelected = (x, y) => {
    if (JSON.stringify(gameState.currentPosition) == JSON.stringify({ x, y })) return true;
    return false;
  };
  const checkTypeOfCell = (x, y) => {
    let type = null;
    gameState.discovered.forEach((cell) => {
      if (JSON.stringify(cell.coordinates) == JSON.stringify({ x, y })) {
        type = cell.type;
      }
    });
    return type;
  };

  const gridContainer = document.querySelector(".grid-container");
  const hintContainer = document.querySelector(".hints");

  let matrixHTMl = "";

  for (let x = 1; x <= gameState.size; x++) {
    for (let y = 1; y <= gameState.size; y++) {
      const selected = checkIfSelected(x, y) ? " selected" : "";
      const discovered = checkTypeOfCell(x, y) ? " discovered" : "";
      const hint = checkTypeOfCell(x, y) === "HINT" ? `<img class="icon" src="./img/hint.svg" alt="hint"/>` : "";
      const mine = checkTypeOfCell(x, y) === "MINE" ? `<img class="icon" src="./img/bomb.svg" alt="mine"/>` : "";

      matrixHTMl =
        matrixHTMl +
        `<div class="grid-item${selected}${discovered}" id="cell-x${x}y${y}"><span class="coordinates">(${x},${y})</span>${hint}${mine}</div>`;
    }
  }
  gridContainer.innerHTML = matrixHTMl;

  let hintsHTML = "";

  gameState.discovered.forEach(cell=>{
    if(cell.type === "HINT"){
        hintsHTML += `<div class="hint">${cell.hint}</div>`;
    }
  })

  hintContainer.innerHTML = hintsHTML;



  console.log(gameState);
};

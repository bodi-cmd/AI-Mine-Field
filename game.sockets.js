module.exports = (io) => {
  const prover9 = require("./prover9.js");
  const buildText = require("./fileTemplate.js");
  io.on("connection", (socket) => {
    const initialGameState = {
      lives: 3,
      lost: false,
      size: 8,
      currentPosition: {
        x: 1,
        y: 1,
      },
      discovered: [],
    };

    let gameState = JSON.parse(JSON.stringify(initialGameState));

    const checkIfSafe = (coordinatesToCheck) => {
      const inputTextForProver9 = buildText(
        gameState.discovered.filter((cell) => cell.type === "HINT").map((cell) => cell.hint),
        coordinatesToCheck
      );
      return prover9(inputTextForProver9);
    };

    const updateGameState = () => {
      const currentItem = findItemByCoordinates(gameState.currentPosition);

      if (
        currentItem &&
        !gameState.discovered.find((item) => JSON.stringify(item) === JSON.stringify(currentItem))
      ) {
        gameState.discovered.push(currentItem);

        if (!checkIfSafe(gameState.currentPosition)) {
          if (gameState.lives > 0) {
            gameState.lives -= 1;
          } else {
            gameState.lost = true;
          }
        }
      }

      if (currentItem.type === "MINE") {
        gameState.lost = true;
      }

      socket.emit("UPDATE", gameState);
    };

    updateGameState();

    socket.on("KEY_EVENT", (key) => {
      switch (key) {
        case "ArrowUp":
          if (gameState.currentPosition.x > 1) {
            gameState.currentPosition.x--;
            updateGameState();
          }
          break;
        case "ArrowDown":
          if (gameState.currentPosition.x < 8) {
            gameState.currentPosition.x++;
            updateGameState();
          }
          break;
        case "ArrowLeft":
          if (gameState.currentPosition.y > 1) {
            gameState.currentPosition.y--;
            updateGameState();
          }
          break;
        case "ArrowRight":
          if (gameState.currentPosition.y < 8) {
            gameState.currentPosition.y++;
            updateGameState();
          }
          break;
        default:
          break;
      }
    });
  });
};

const findItemByCoordinates = ({ x, y }) => {
  const items = require("./items");
  let found = {
    coordinates: { x, y },
    type: "EMPTY",
    value: "",
  };
  items.forEach((item) => {
    if (JSON.stringify(item.coordinates) === JSON.stringify({ x, y })) {
      found = item;
    }
  });
  return found;
};

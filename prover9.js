module.exports = (content) => {
  const fs = require("fs");
  const { exec } = require("child_process");

  try {
    fs.writeFileSync("./out.txt", content);

    exec("prover9 -f out.txt", (error, stdout, stderr) => {
      if (stderr && stderr.includes("THEOREM PROVED")) {
        console.log("THEOREM PROVED");
        return true;
      }
  
      if (error) {
        console.error(`error: ${error.message}`);
        return false;
      }
    });
    return false
  } catch (error) {
    return true;
  }
};

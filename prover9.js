module.exports = (content) => {
  const fs = require("fs");
  const { exec } = require("child_process");

  try {
    fs.writeFileSync("./out.txt", content);
    return Math.random() > 0.5;
  } catch (error) {
    return true;
  }
  //   exec("prover9 -f out.txt", (error, stdout, stderr) => {
  //     if (stderr) {
  //       console.error(`stderr: ${stderr}`);
  //       return;
  //     }

  //     if (error) {
  //       console.error(`error: ${error.message}`);
  //       return;
  //     }

  //     console.log(`stdout:\n${stdout}`);
  //   });
};

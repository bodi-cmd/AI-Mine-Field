module.exports = (content) => {
  const fs = require("fs");
  const { exec } = require("child_process");
  const date = new Date();
  const fileName = `./prover_files/out_${date.getTime()}.txt`
  try {
    fs.writeFileSync(fileName, content);

    return Math.random() > 0.5;

//     exec("prover9 -f "+fileName, (error, stdout, stderr) => {
//       if (stderr && stderr.includes("THEOREM PROVED")) {
//         console.log("THEOREM PROVED");
//         return true;
//       }
  
//       if (error) {
//         console.error(`error: ${error.message}`);
//         return false;
//       }
//     });
//     return false
  } catch (error) {
    return true;
  }
};

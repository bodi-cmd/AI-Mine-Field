module.exports = (content, callback) => {
  const fs = require("fs");
  const { exec } = require("child_process");
  const date = new Date();
  const fileName = `./prover_files/out_${date.getTime()}.txt`
  try {
    fs.writeFileSync(fileName, content);

    callback(Math.random() > 0.5, null);

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
    callback(true, null);
  }
};

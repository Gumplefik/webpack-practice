const fs = require("fs");

module.exports = class ReoveDistPlugin {
  apply(complier) {
    complier.hooks.emit.tapAsync(
      "RemoveDistPlugin",
      (compilation, callback) => {
        console.log("Running clean dist plugin");
        console.log(`Deleting dir: ${complier.outputPath}`);
        rmDir(complier.outputPath);
        callback();
      }
    );
  }
};

function rmDir(dirPath) {
  try {
    var files = fs.readdirSync(dirPath);
  } catch (e) {
    console.log(e);
    return;
  }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + "/" + files[i];
      if (fs.statSync(filePath).isFile()) fs.unlinkSync(filePath);
      else rmDir(filePath);
    }
  fs.rmdirSync(dirPath);
}

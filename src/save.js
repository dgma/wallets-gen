const fs = require("fs");

module.exports.save = (type, data) => {
  let file = `.${type}.result.json`;
  if (process.env.OUTPUT) {
    const names = process.env.OUTPUT.split(".");
    file =
      names[names.length - 1] === "json"
        ? process.env.OUTPUT
        : `${process.env.OUTPUT}.json`;
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

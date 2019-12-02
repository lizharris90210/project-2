// file system package
const fs = require("file-system");
// keys.js import
const keys = require("../keys");
const gradient = require("gradient-string");

// data logger to export into a json file.
const APIBuilder = {
  
  logger : function (data) {
// change the subject in ../keys.js to get a json file with data matching that genre from youtube and spotify
    fs.appendFile(keys.subject.genre + ".json", "\n" + JSON.stringify(data,null,2), function (error) {
      if (error) {
        console.log("error");
      } else {
        console.log(gradient.morning("\ndata logged\n"));
      }
    });

  }
};

module.exports = APIBuilder;
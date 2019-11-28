// Logger.js logs data I pulled from Youtube and stores the data in a corresponding js file.
// file system package
var fs = require("file-system");
// gradient string package
var gradient = require("gradient-string");
// keys.js import
const keys = require("../keys");

// data logger to export into a json file.
var APIBuilder = {
  
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
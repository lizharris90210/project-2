var fs = require("file-system");
var gradient = require("gradient-string");
const keys = require("../keys");

var APIBuilder = {
  logger : function (data) {

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
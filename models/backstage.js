var Sequelize = require("sequelize");
var sequelize = require("../config/config.json");

module.exports = function(sequelize) {
  var Backstage = sequelize.define(
    "Backstage",
    {
      backstage_name: Sequelize.STRING,
      location_city: Sequelize.STRING,
      location_state: Sequelize.STRING,
      contact_email: Sequelize.STRING,
      contact_insta: Sequelize.STRING,
      contact_twitter: Sequelize.STRING,
      equipment: Sequelize.STRING,
      experience: Sequelize.STRING,
      genres: Sequelize.STRING
    },
    {
      freezeTableName: true
    }
  );
};

Backstage.sync();
module.exports = Backstage;

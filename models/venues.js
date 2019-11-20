<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
  const Venues = sequelize.define("Venues", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [1]
      }
    },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location_city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    contact_insta: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_twitter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
  );
    return Venues;
  };
=======
// var Sequelize = require("sequelize");
// var sequelize = require("../config/config.js");

// module.exports = function(sequelize) {
//   var Venues = sequelize.define(
//     "Venues",
//     {
//       venue_name: Sequelize.STRING,
//       location_city: Sequelize.STRING,
//       location_state: Sequelize.STRING,
//       contact_email: Sequelize.STRING,
//       contact_insta: Sequelize.STRING,
//       contact_twitter: Sequelize.STRING,
//       genres: Sequelize.STRING
//     },
//     {
//       freezeTableName: true
//     }
//   );
// };

// Venues.sync();
// module.exports = Venues;
>>>>>>> master

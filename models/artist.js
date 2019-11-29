// Validation
const gradient = require("gradient-string");
console.log(`${gradient.summer("/models/artist.js loaded")}\n=========================`);

"use strict";

module.exports = function (sequelize, DataTypes) {
  const Artist = sequelize.define("artists",{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [1]
      }
    },
    artist_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    artist_pic: {
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
    contact_instagram: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_twitter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current_band: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instruments: {
      type: DataTypes.STRING,
      allowNull: false
    },
    past_bands: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
  }
  );
 
  return Artist;
};


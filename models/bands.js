module.exports = function(sequelize, DataTypes) {
  var Bands = sequelize.define(
    "bands",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        validate: {
          len: [1]
        }
      },
      band_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      band_pic: {
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
      pastband_names: {
        type: DataTypes.STRING,
        allowNull: false
      },
      artist_names: {
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
  return Bands;
};

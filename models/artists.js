module.exports = function (sequelize, DataTypes) {
  const Artists = sequelize.define("Artist", {
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
    current_group: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instruments: {
      type: DataTypes.STRING,
      allowNull: false
    },
    past_groups: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Artists;
};

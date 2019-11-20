module.exports = function (sequelize, DataTypes) {
  const Backstage = sequelize.define("Backstage", {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [1]
      }
    },
      backstage_name: {
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
      equipment: {
        type: DataTypes.STRING,
        allowNull: false
      },
      experience: {
        type: DataTypes.STRING,
        allowNull: false
      },
      genres: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });
  return Backstage;
};
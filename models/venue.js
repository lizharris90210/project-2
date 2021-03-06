module.exports = function(sequelize, DataTypes) {
const Venue = sequelize.define("venues", {
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
  venue_pic: {
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
  genres: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  freezeTableName: true,
  timestamps: false
}
);
  return Venue;
};

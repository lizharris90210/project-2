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
  });

  return Artists;
};

INSERT INTO ``
    (`id`,`artist_name`,`location_city
  
`,`location_state`,`contact_email`,`contact_insta`,`contact_twitter`,`current_group`,`instruments`,`past_groups`,`genre`) VALUES
(1,'Liz Harris','Washington','DC','LizZepp@zmail.com','@LizZep','@LizZtweet','the VarChars','guitar','forLoops','classic rock');
INSERT INTO ``
    (`id`,`artist_name`,`location_city
  
`,`location_state`,`contact_email`,`contact_insta`,`contact_twitter`,`current_group`,`instruments`,`past_groups`,`genre`) VALUES
(2,'Hilary Lamb','Los Angeles','CA','indiePOP@zmail.com','@indiePOP','@indiePOPtweet','the Swiftees','lead singer','Tay Tays','indie, pop');
INSERT INTO ``
    (`id`,`artist_name`,`location_city
  
`,`location_state`,`contact_email`,`contact_insta`,`contact_twitter`,`current_group`,`instruments`,`past_groups`,`genre`) VALUES
(3,'Jackson Pearce','Miami','FL','json@zmail.com','@jackson5','@jackson5','the Action Jacksons','keyboard, guitar','the Apple Eaters','metal, indie, alt');
INSERT INTO ``
    (`id`,`artist_name`,`location_city
  
`,`location_state`,`contact_email`,`contact_insta`,`contact_twitter`,`current_group`,`instruments`,`past_groups`,`genre`) VALUES
(4,'Armon Roberts','New York','NY','AR15@zmail.com','@AR15','@AR15tweet','the NoDemons','drums, backup vocals','the Postals','rock, indie, pop');

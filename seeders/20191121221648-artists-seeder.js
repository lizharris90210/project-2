// Validation
const gradient = require("gradient-string");
console.log(`${gradient.summer("/seeders/20191121221648-artists-seeder.js loaded")}\n=========================\n`);

"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "artists",
      [
        {
          artist_name: "Liz Harris",
          artist_pic:
            "https://www.siriusxm.ca/wp-content/uploads/2018/12/Led-Zeppelin-cover.jpg",
          location_city: "Washington",
          location_state: "DC",
          contact_email: "LizZepp@zmail.com",
          contact_instagram: "@LizZep",
          contact_twitter: "@LizZtweet",
          current_band: "the VarChars",
          instruments: "guitar, piano",
          past_bands: "forLoops",
          genres: "classic rock"
        },
        {
          artist_name: "Jackson Pearce",
          artist_pic:
            "https://files.slack.com/files-pri/TL77KG802-FQNCGECHX/d6614cb1-92c9-441b-be53-f4e8a9c57cf3.jpeg",
          location_city: "Miami",
          location_state: "FL",
          contact_email: "json@zmail.com",
          contact_instagram: "@jackson5",
          contact_twitter: "@jackson5",
          current_band: "the Action Jacksons",
          instruments: "keyboard",
          past_bands: "the Apple Eaters",
          genres: "metal,indie,alt"
        },
        {
          artist_name: "Armon Roberts",
          artist_pic:
            "https://images-na.ssl-images-amazon.com/images/I/71%2BNRF9O38L._SY741_.jpg",
          location_city: "Chicago",
          location_state: "Ill",
          contact_email: "djblackpharaoh@hotmail.com",
          contact_instagram: "@djAnub",
          contact_twitter: "@TheRealOJ32",
          current_band: "Coheed and Cambria",
          instruments: "Trumpet",
          past_bands: "BAMFs",
          genres: "metal"
        },
        {
          artist_name: "Hilary Lamb",
          artist_pic:
            "http://1.bp.blogspot.com/-NzcNy2zRZQU/U-gcxm4S1UI/AAAAAAAADoQ/oRTB2dBEFTk/s1600/hilarylamb-1-26.png",
          location_city: "Los Angeles",
          location_state: "CA",
          contact_email: "indiePOP@zmail.com",
          contact_instagram: "@indiPOP",
          contact_twitter: "@hilDawq",
          current_band: "the Swiftees",
          instruments: "lead singer",
          past_bands: "Tay Tays",
          genres: "indie,pop"
        }
      ],
      {}
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete("artist", null, {});
      */
  }
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("artists", [
        {
        artist_name: "Liz Harris",
        location_city:"Washington",
        location_state: "DC",
        contact_email: "LizZepp@zmail.com",
        contact_insta: "@LizZep",
        contact_twitter: "@LizZtweet",
        current_band: "the VarChars",
        instruments:"guitar",
        past_bands: "forLoops",
        genres: "classic rock",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
        {
        artist_name: "Jackson Pearce",
        location_city:"Miami",
        location_state: "FL",
        contact_email: "json@zmail.com",
        contact_insta: "@jackson5",
        contact_twitter: "@jackson5",
        current_band: "the Action Jacksons",
        instruments:"keyboard",
        past_bands: "the Apple Eaters",
        genres: "metal, indie, alt",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
        {
        artist_name: "Armon Roberts",
        location_city:"Chicago",
        location_state: "Ill",
        contact_email: "djblackpharaoh@hotmail.com",
        contact_insta: "@djAnub",
        contact_twitter: "@TheRealOJ32",
        current_band: "Coheed and Cambria",
        instruments:"Trumpet",
        past_bands: "BAMFs",
        genres: "metal",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
        {
        artist_name: "Hilary Lamb",
        location_city:"Los Angeles",
        location_state: "CA",
        contact_email: "indiePOP@zmail.com",
        contact_insta: "@indiPOP",
        contact_twitter: "@hilDawq",
        current_band: "the Swiftees",
        instruments:"lead singer",
        past_bands: "Tay Tays",
        genres: "indie, pop",
        createdAt: new Date(),
        updatedAt: new Date() 
        }
        
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

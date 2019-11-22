"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("bands", [
        {
        band_name:"Dethlok",
        location_city:"Mt. Olympus",
        location_state:"unknown",
        contact_email:"dethlok@zmail.com",
        contact_insta:"@dethlokband",
        contact_twitter:"@dethlokband",
        pastband_names:"Billy Graham",
        artist_names:"Nathan Explosion,\nSkwisgaar Skwigelf,\nToki Wartooth,\nWilliam Murderface,\nPickles",
        genres:"metal",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        {
        band_name:"Josie and the Pussycat Dolls",
        location_city:"Riverdale",
        location_state:"CA",
        contact_email:"JPCband@zmail.com",
        contact_insta:"@josiePC",
        contact_twitter:"@josiePCtweet",
        pastband_names:"Spice Girls",
        artist_names:"Josie McCoy,  Melody Valentine, Valerie Brown",
        genres:"pop rock",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        {
        band_name:"The Monkees",
        location_city:"Hollywood",
        location_state:"CA",
        contact_email:"heyheywerethemonkees@zmail.com",
        contact_insta:"@heyheywerthemonkees",
        contact_twitter:"@heyheywerthemonkees",
        pastband_names:"The Who",
        artist_names: "Micky Dolenz, Michael Nesmith,  Peter Tork, Davy Jones",
        genres:"pop rock",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        {
        band_name:"the Venture Brothers",
        location_city:"Cherry Hill",
        location_state:"NJ",
        contact_email:"vbros@zmail.com",
        contact_insta:"@adventureBros",
        contact_twitter:"@ventureToAdventure",
        pastband_names: "The Begees",
        artist_names: "Brock Samson, Hank Venture, Dean Venture, Rusty Venture",
        genres:"pop rock, pop punk",
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

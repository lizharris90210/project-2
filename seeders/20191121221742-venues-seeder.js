"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("venues", [
        {
        venue_name:"Chandelier",
        location_city:"Los Angeles",
        location_state:"CA",
        contact_email:"chandelier@zmail.com",
        contact_insta:"@chandelierclub",
        contact_twitter:"@chandelierclub",
        genres:"rock, rap, hip hop, pop, dance, metal, punk",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        {
        venue_name:"Monopoly Arena",
        location_city:"Dallas",
        location_state:"TX",
        contact_email:"monopoly@zmail.com",
        contact_insta:"@monopoly@zmail.com",
        contact_twitter:"@monoployarena",
        genres:"all",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        {
        venue_name:"Green Room",
        location_city:"Washington",
        location_state:"DC",
        contact_email:"green@zmail.com",
        contact_insta:"@greenroom",
        contact_twitter:"@greenroom",
        genres:"jam, rock, dance, metal, jazz, blues, pop",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        {
        venue_name:"Backbar",
        location_city:"Hogwash",
        location_state:"ND",
        contact_email:"hogwash@zmail.com",
        contact_insta:"t@thehogwashbar",
        contact_twitter:"@thehogwashbar",
        genres: "country, rock, blues",
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

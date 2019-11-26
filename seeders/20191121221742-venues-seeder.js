"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("venues", [
        {
        venue_name:"Chandelier",
        venue_pic: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_640,q_75,w_640/v1/clients/austin/13ACV155ACLLive1600x426_09670291-c950-429b-8a1b-72dd5645ecd5.jpg",
        location_city:"Los Angeles",
        location_state:"CA",
        contact_email:"chandelier@zmail.com",
        contact_instagram:"@chandelierclub",
        contact_twitter:"@chandelierclub",
        genres:"rock, rap, hip hop, pop, dance, metal, punk"
      },
        {
        venue_name:"Monopoly Arena",
        venue_pic: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_640,q_75,w_640/v1/clients/austin/13ACV155ACLLive1600x426_09670291-c950-429b-8a1b-72dd5645ecd5.jpg",
        location_city:"Dallas",
        location_state:"TX",
        contact_email:"monopoly@zmail.com",
        contact_instagram:"@monopoly@zmail.com",
        contact_twitter:"@monoployarena",
        genres:"all"
      },
        {
        venue_name:"Green Room",
        venue_pic: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_640,q_75,w_640/v1/clients/austin/13ACV155ACLLive1600x426_09670291-c950-429b-8a1b-72dd5645ecd5.jpg",
        location_city:"Washington",
        location_state:"DC",
        contact_email:"green@zmail.com",
        contact_instagram:"@greenroom",
        contact_twitter:"@greenroom",
        genres:"jam, rock, dance, metal, jazz, blues, pop"
      },
        {
        venue_name:"Backbar",
        venue_pic: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_640,q_75,w_640/v1/clients/austin/13ACV155ACLLive1600x426_09670291-c950-429b-8a1b-72dd5645ecd5.jpg",
        location_city:"Hogwash",
        location_state:"ND",
        contact_email:"hogwash@zmail.com",
        contact_instagram:"t@thehogwashbar",
        contact_twitter:"@thehogwashbar",
        genres: "country, rock, blues"
      }
    ], {});
    
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

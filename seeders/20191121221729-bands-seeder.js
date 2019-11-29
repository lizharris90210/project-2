// Validation
const gradient = require("gradient-string");
console.log(`${gradient.summer("/seeders/20191121221729-bands-seeder.js loaded")}\n=========================`);

"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "bands",
      [
        {
          band_name: "Dethlok",
          band_pic:
            "https://amtshows.com/wp-content/uploads/2014/01/bands-on-the-rise-silhouette-of-rock-band-on-stage.jpg",
          location_city: "Mt. Olympus",
          location_state: "unknown",
          contact_email: "dethlok@zmail.com",
          contact_instagram: "@dethlokband",
          contact_twitter: "@dethlokband",
          pastband_names: "Billy Graham",
          artist_names:
            "Nathan Explosion, Skwisgaar Skwigelf, Toki Wartooth, William Murderface, Pickles",
          genres: "metal"
        },
        {
          band_name: "Josie and the Pussycat Dolls",
          band_pic:
            "https://amtshows.com/wp-content/uploads/2014/01/bands-on-the-rise-silhouette-of-rock-band-on-stage.jpg",
          location_city: "Riverdale",
          location_state: "CA",
          contact_email: "JPCband@zmail.com",
          contact_instagram: "@josiePC",
          contact_twitter: "@josiePCtweet",
          pastband_names: "Spice Girls",
          artist_names: "Josie McCoy,  Melody Valentine, Valerie Brown",
          genres: "pop rock"
        },
        {
          band_name: "The Monkees",
          band_pic:
            "https://amtshows.com/wp-content/uploads/2014/01/bands-on-the-rise-silhouette-of-rock-band-on-stage.jpg",
          location_city: "Hollywood",
          location_state: "CA",
          contact_email: "heyheywerethemonkees@zmail.com",
          contact_instagram: "@heyheywerthemonkees",
          contact_twitter: "@heyheywerthemonkees",
          pastband_names: "The Who",
          artist_names:
            "Micky Dolenz, Michael Nesmith,  Peter Tork, Davy Jones",
          genres: "pop rock"
        },
        {
          band_name: "the Venture Brothers",
          band_pic:
            "https://amtshows.com/wp-content/uploads/2014/01/bands-on-the-rise-silhouette-of-rock-band-on-stage.jpg",
          location_city: "Cherry Hill",
          location_state: "NJ",
          contact_email: "vbros@zmail.com",
          contact_instagram: "@adventureBros",
          contact_twitter: "@ventureToAdventure",
          pastband_names: "The Begees",
          artist_names:
            "Brock Samson, Hank Venture, Dean Venture, Rusty Venture",
          genres: "pop rock, pop punk"
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
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

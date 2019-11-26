"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("backstages", [
        {
        backstage_name:"Boris Karlov",
        backstage_pic: "http://i1.sndcdn.com/artworks-000603414199-auml3z-original.jpg",
        location_city:"Denver",
        location_state:"CO",
        contact_email:"BorisKGB@zmail.com",
        contact_instagram:"@bkgb999",
        contact_twitter:"@boristweets999",
        equipment:"audio board",
        experience:"2 tours with Ozzy, 1 tour with Kelly Clarkson, 3 tours with Ariana Grande",
        genres:"any" 
      },
        {
        backstage_name:"Josh Hashings",
        backstage_pic: "http://i1.sndcdn.com/artworks-000603414199-auml3z-original.jpg",
        location_city:"Portland",
        location_state:"OR",
        contact_email:"jhash@zmail.com",
        contact_instagram:"@jhashtags",
        contact_twitter:"@jhashtagstweets",
        equipment:"lights, stage setup, stage teardown, guitar tuning",
        experience:"4 tours with Foo Fighters, 1 tour with Mariah Carey",
        genres:"any" 
      },
        {
        backstage_name:"Marty",
        backstage_pic: "http://i1.sndcdn.com/artworks-000603414199-auml3z-original.jpg",
        location_city:"Delmarva",
        location_state:"DE",
        contact_email:"martyLovesToParty@zmail.com",
        contact_instagram:"@martyParty",
        contact_twitter:"@martyPartyTwitter",
        equipment:"manager, stage setup, stage teardown",
        experience:"1 tour Mr. Universe",
        genres:"any" 
      },
        {
        backstage_name:"Lisa Simpson",
        backstage_pic: "http://i1.sndcdn.com/artworks-000603414199-auml3z-original.jpg",
        location_city:"Springfield",
        location_state:"Oh",
        contact_email:"lisasimpson@zmail.com",
        contact_instagram:"@BleedingGumsJr",
        contact_twitter:"@LisaSax",
        equipment:"manager",
        experience:"managed Jazz Stars 2 years, managed Blue Hounds 3 years, currently managing Dark Blue and Sad",
        genres:"jazz, blues" 
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

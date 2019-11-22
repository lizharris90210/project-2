"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("backstages", [
        {
        backstage_name:"Boris Karlov",
        location_city:"Denver",
        location_state:"CO",
        contact_email:"BorisKGB@zmail.com",
        contact_insta:"@bkgb999",
        contact_twitter:"@boristweets999",
        equipment:"audio board",
        experience:"2 tours with Ozzy, 1 tour with Kelly Clarkson, 3 tours with Ariana Grande",
        genres:"any",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        {
        backstage_name:"Josh Hashings",
        location_city:"Portland",
        location_state:"OR",
        contact_email:"jhash@zmail.com",
        contact_insta:"@jhashtags",
        contact_twitter:"@jhashtagstweets",
        equipment:"lights, stage setup, stage teardown, guitar tuning",
        experience:"4 tours with Foo Fighters, 1 tour with Mariah Carey",
        genres:"any",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        {
        backstage_name:"Marty",
        location_city:"Delmarva",
        location_state:"DE",
        contact_email:"martyLovesToParty@zmail.com",
        contact_insta:"@martyParty",
        contact_twitter:"@martyPartyTwitter",
        equipment:"manager, stage setup, stage teardown",
        experience:"1 tour Mr. Universe",
        genres:"any",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        {
        backstage_name:"Lisa Simpson",
        location_city:"Springfield",
        location_state:"Oh",
        contact_email:"lisasimpson@zmail.com",
        contact_insta:"@BleedingGumsJr",
        contact_twitter:"@LisaSax",
        equipment:"manager",
        experience:"managed Jazz Stars 2 years, managed Blue Hounds 3 years, currently managing Dark Blue and Sad",
        genres:"jazz, blues",
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

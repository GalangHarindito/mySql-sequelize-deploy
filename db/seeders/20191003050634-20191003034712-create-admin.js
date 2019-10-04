'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admins', 
      [
        {
          name:"Kabuto",
          email:"lala@lili.com",
          password:"123",
          createdAt:"2019-10-3",
          updatedAt:"2019-10-3",
          gender:"Male"
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admins', null, {});
  }
};

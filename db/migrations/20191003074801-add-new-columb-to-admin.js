'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("admins", "address", {
      type: Sequelize.STRING,
      defaultValue: "address"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("admins", "address");
  }
};

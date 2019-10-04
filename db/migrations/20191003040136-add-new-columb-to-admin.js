"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("admins", "gender", {
      type: Sequelize.STRING,
      defaultValue: "U"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("admins", "gender");
  }
};

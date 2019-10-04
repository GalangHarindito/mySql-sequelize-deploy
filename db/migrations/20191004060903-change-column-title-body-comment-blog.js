"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn(
          "blogs",
          "title",
          {
            type: Sequelize.TEXT
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "blogs",
          "body",
          {
            type: Sequelize.TEXT
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "blogs",
          "comment",
          {
            type: Sequelize.TEXT
          },
          { transaction: t }
        )
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    // return queryInterface.changeColumn("blogs", {
    //   // title: {
    //   //   type: Sequelize.STRING
    //   // },
    //   // body: {
    //   //   type: Sequelize.STRING
    //   // },
    //   // comment: {
    //   //   type: Sequelize.STRING
    //   // }
    // });
  }
};

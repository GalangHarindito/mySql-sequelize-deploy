'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define('blog', {
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    comment: DataTypes.TEXT,
    adminId: DataTypes.INTEGER
  }, {});
  blog.associate = function(models) {
    blog.belongsTo(models.admin)
    // associations can be defined here
  };
  return blog;
};
'use strict';

module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    occupation:DataTypes.STRING
  }, {});
  admin.associate = function(models) {
    admin.hasOne(models.blog)
    // associations can be defined here
  };
  return admin;
};
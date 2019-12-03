module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    facebookId: DataTypes.STRING,
    googleId: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    salt: DataTypes.STRING,
  });

  return User;
};

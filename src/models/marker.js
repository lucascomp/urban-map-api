module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Marker', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    lat: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    lng: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  });

  return User;
};

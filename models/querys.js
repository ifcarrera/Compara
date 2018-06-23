module.exports = (sequelize, DataTypes) => {
  const query = sequelize.define('query', {
    ip: { type: DataTypes.STRING,
      unique: "uniqueIP",
      },
  });
  return query;
};

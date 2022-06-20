module.exports = function(sequelize, DataTypes) {
  const artbook = sequelize.define("artbook", {
    user_id: {
      type: DataTypes.STRING
    },
    savedArt: {
      type: DataTypes.STRING
    }
  });

  return artbook;
};

module.exports = (sequelize, Sequelize) => {
  const NatureSupport = sequelize.define("natureSupport", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    libelle: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return NatureSupport;
};
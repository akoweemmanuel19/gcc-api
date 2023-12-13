module.exports = (sequelize, Sequelize) => {
    const NatureSupport = sequelize.define("natureSupport", {
      id: {
        type: Sequelize.STRING,
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
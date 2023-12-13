module.exports = (sequelize, Sequelize) => {
    const TypePartieSupport = sequelize.define("typePartieSupport", {
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
  
    return TypePartieSupport;
  };
module.exports = (sequelize, Sequelize) => {
    const TypeSupport = sequelize.define("typeSupport", {
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
  
    return TypeSupport;
  };
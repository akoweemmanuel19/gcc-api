module.exports = (sequelize, Sequelize) => {
    const TypeSupport = sequelize.define("typeSupport", {
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
  
    return TypeSupport;
  };
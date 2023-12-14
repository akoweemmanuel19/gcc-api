module.exports = (sequelize, Sequelize) => {
    const TypeConnaissance = sequelize.define("typeConnaissance", {
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
  
    return TypeConnaissance;
  };
module.exports = (sequelize, Sequelize) => {
    const TypeConnaissance = sequelize.define("typeConnaissance", {
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
  
    return TypeConnaissance;
  };
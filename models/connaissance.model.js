module.exports = (sequelize, Sequelize) => {
    const Connaissance = sequelize.define("connaissance", {
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
  
    return Connaissance;
  };
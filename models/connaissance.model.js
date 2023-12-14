module.exports = (sequelize, Sequelize) => {
    const Connaissance = sequelize.define("connaissance", {
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
      },
      connaissanceSId:{
        type: Sequelize.STRING,
      }
    });
  
    return Connaissance;
  };
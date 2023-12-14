module.exports = (sequelize, Sequelize) => {
    const Support = sequelize.define("support", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      titre: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      }
    });
  
    return Support;
  };
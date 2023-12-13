module.exports = (sequelize, Sequelize) => {
    const Support = sequelize.define("support", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Support;
  };
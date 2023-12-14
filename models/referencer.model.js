module.exports = (sequelize, Sequelize) => {
    const Referencer = sequelize.define("referencer", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
  
    return Referencer;
  };
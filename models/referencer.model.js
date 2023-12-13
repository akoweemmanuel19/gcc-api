module.exports = (sequelize, Sequelize) => {
    const Referencer = sequelize.define("referencer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    });
  
    return Referencer;
  };
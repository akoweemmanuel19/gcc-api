module.exports = (sequelize, Sequelize) => {
    const PartieSupport = sequelize.define("partieSupport", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        contenu: {
            type: Sequelize.TEXT 
        }
    });

    return PartieSupport;
};
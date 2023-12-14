const dbConfig = require("../config/db.config.js");
const data = require('../data/data.js')

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.supports = require("./support.model.js")(sequelize, Sequelize);
db.natureSupports = require("./natureSupport.model.js")(sequelize, Sequelize);
db.typeSupports = require("./typeSupport.model.js")(sequelize, Sequelize);
db.typePartieSupports = require("./typePartieSupport.model.js")(sequelize, Sequelize);
db.partieSupports = require("./partieSupport.model.js")(sequelize, Sequelize);
db.typeConnaissance = require("./typeConnaissance.model.js")(sequelize, Sequelize);
db.referencers = require("./referencer.model.js")(sequelize, Sequelize);
db.connaissances = require("./connaissance.model.js")(sequelize, Sequelize);

db.connaissances.hasMany(db.supports, {
    foreignKey: 'connaissanceId'
});

db.natureSupports.hasMany(db.typeSupports, {
    foreignKey: 'natureSupportId'
});

db.typePartieSupports.hasMany(db.partieSupports, {
    foreignKey: 'typePartieSupportId'
});

db.supports.hasMany(db.partieSupports, {
    foreignKey: 'supportId'
});

db.typeSupports.hasMany(db.supports, {
    foreignKey: 'typeSupportId'
});

db.typeConnaissance.hasMany(db.connaissances, {
    foreignKey: 'typeConnaissanceId'
});

db.supports.hasMany(db.referencers, {
    foreignKey: 'support1Id'
});

db.supports.hasMany(db.referencers, {
    foreignKey: 'support2Id'
});


const Init = () => {
    // drop the table if it already exists
    db.sequelize.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db.");
        data.allNatureSupports.forEach(
            natureSupport =>{
                db.natureSupports.create(
                    {
                        libelle: natureSupport.libelle,
                        description: natureSupport.description
                    }
                )
            }
        )

        data.allTypeConnaissances.forEach(
            typeConnaissance =>{
                db.typeConnaissance.create(
                    {
                        libelle: typeConnaissance.libelle,
                        description: typeConnaissance.description
                    }
                )
            }
        )

        data.allTypePartieSupports.forEach(
            typePartieSupport =>{
                db.typePartieSupports.create(
                    {
                        libelle: typePartieSupport.libelle,
                        description: typePartieSupport.description
                    }
                )
            }
        )

    });
}


module.exports = {
    Init,
    db
};
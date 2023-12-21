module.exports = (sequelize, Sequelize) => {
    const Utilisateur = sequelize.define("utilisateur", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: { 
        type: Sequelize.STRING
      },
      email: { 
        type: Sequelize.STRING
      },
      password: { 
        type: Sequelize.STRING
      },
      old_password: { 
        type: Sequelize.STRING
      },
      profil:{
        type: Sequelize.STRING,
        defaultValue: ['admin','user']
      }
    });
  
    return Utilisateur;
  };
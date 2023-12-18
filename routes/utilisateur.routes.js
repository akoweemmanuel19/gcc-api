module.exports = app => {
    const utilisateurs = require("../controllers/utilisateur.controller");
    const auth = require('../config/auth')
  
    var router = require("express").Router();
  
    router.post("/",auth, utilisateurs.create);
  
    router.get("/",auth, utilisateurs.findAll);
  
    router.get("/:id",auth, utilisateurs.findOne);
  
    router.put("/:id",auth, utilisateurs.update);
  
    router.delete("/:id", utilisateurs.delete);
  
    app.use("/api/utilisateurs",auth, router);
  };